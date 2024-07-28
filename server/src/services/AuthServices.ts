import path from "path";
import bcrypt from "bcrypt";
import fileUpload from "express-fileupload";

import userModule from "../modules/user.module";
import TokenSessionRepositoryService from "./TokenSessionRepositoryService";
import FilesServices from "./FilesServices";

import { UserDto } from "../dto/user.dto";
import { ResponseException } from "../exceptions/response.exception";

import type {
	ILoginProps,
	ILoginReturn,

	IRegistrationProps,
	IRegistrationReturn,

	ILogoutProps,
	ILogoutReturn,

	IRefreshProps,
	IRefreshReturn,

	IUpdateProps,
	IUpdateReturn,

	IDeleteProps,
	IDeleteReturn,
} from "../types/auth.type";

interface IAuthServices { }

class AuthServices implements IAuthServices {

	public async registration({
		username,
		email,
		password,
		avatar,
		poster,
		fingerprint,
	}: IRegistrationProps): Promise<IRegistrationReturn> {
		const userExist = await userModule.findOne({ email });

		if (userExist) {
			throw ResponseException.badRequest(`A user with the email address ${email} already exists!`);
		}

		const hashPassword: string = await bcrypt.hash(password, 12);
		const user = await userModule.create({
			username,
			password: hashPassword,
			email,
			avatar,
			poster
		});

		if (!user) {
			throw ResponseException.badRequest("Error to creating user!");
		}

		const payload = new UserDto({
			id: user.id,
			username: user.username,
			email: user.email,
			avatar: user.avatar,
			poster: user.poster,
		});

		const {
			accessToken,
			refreshToken
		} = TokenSessionRepositoryService.generateTokens({ ...payload });

		await TokenSessionRepositoryService.create({
			userId: payload.id,
			refreshToken,
			fingerprint,
		});

		return {
			user: payload,
			accessToken,
			refreshToken
		};
	}

	public async login({
		email,
		password,
		fingerprint
	}: ILoginProps): Promise<ILoginReturn> {
		const userExist = await userModule.findOne({ email });

		if (!userExist) {
			throw ResponseException.badRequest("User is not found!");
		}

		const isPasswordEquals = await bcrypt.compare(password, userExist.password);

		if (!isPasswordEquals) {
			throw ResponseException.badRequest("Incorrect password");
		}

		const compareRefreshSession = await TokenSessionRepositoryService.compareSessionTokenByUserIdAndFingerprint({
			userId: userExist.id,
			fingerprint
		});

		if (compareRefreshSession) {
			await TokenSessionRepositoryService.deleteSession({
				refreshToken: compareRefreshSession.refresh_token
			});
		}

		const payload = new UserDto({
			id: userExist.id,
			email: userExist.email,
			username: userExist.username,
			avatar: userExist.avatar,
			poster: userExist.poster
		});

		const {
			accessToken,
			refreshToken
		} = TokenSessionRepositoryService.generateTokens({ ...payload });

		await TokenSessionRepositoryService.create({
			userId: payload.id,
			refreshToken,
			fingerprint
		});

		return {
			user: payload,
			accessToken,
			refreshToken
		};
	}

	public async logout({
		refreshToken
	}: ILogoutProps): Promise<ILogoutReturn> {
		const session = await TokenSessionRepositoryService.deleteSession({ refreshToken });
		return session;
	}

	public async refresh({
		refreshToken,
		fingerprint
	}: IRefreshProps): Promise<IRefreshReturn> {
		if (!refreshToken) {
			throw ResponseException.unauthorized();
		}

		const validateRefreshToken = TokenSessionRepositoryService.validateRefreshToken(refreshToken);
		const session = await TokenSessionRepositoryService.compareSessionTokenByRefreshToken({ refreshToken });

		if (!validateRefreshToken || !session) {
			throw ResponseException.unauthorized();
		}

		if (session.finger_print !== fingerprint.hash) {
			throw ResponseException.forbidden();
		}

		await TokenSessionRepositoryService.deleteSession({ refreshToken });

		const user = await userModule.findById(validateRefreshToken.id);

		if (!user) {
			throw ResponseException.badRequest("User is not found!");
		}

		const payload = new UserDto({
			id: user.id,
			username: user.username,
			email: user.email,
			avatar: user.avatar,
			poster: user.poster
		});

		const tokens = TokenSessionRepositoryService.generateTokens({ ...payload });

		await TokenSessionRepositoryService.create({
			userId: user.id,
			refreshToken: tokens.refreshToken,
			fingerprint
		});

		return {
			user: { ...payload },
			accessToken: tokens.accessToken,
			refreshToken: tokens.refreshToken,
		};
	}

	public async updateUserData({
		username,
		email,
		avatar,
		poster
	}: IUpdateProps): Promise<IUpdateReturn> {
		const userExist = await userModule.findOne({ email });
		if (!userExist) {
			throw ResponseException.badRequest("User not found!");
		}

		if (avatar) {
			const avatarPath: string = path.resolve(__dirname, "..", "static", userExist?.avatar as string);
			await FilesServices.checkAndDeleteFile(avatarPath);
		}

		if (poster) {
			const posterPath: string = path.resolve(__dirname, "..", "static", userExist?.poster as string);
			await FilesServices.checkAndDeleteFile(posterPath);
		}

		const newAvatar = await FilesServices.move(avatar as fileUpload.UploadedFile);
		const newPoster = await FilesServices.move(poster as fileUpload.UploadedFile);

		const responseUpdated = await userExist?.updateOne({
			username: username || userExist.username,
			avatar: newAvatar,
			poster: newPoster,
		});

		return responseUpdated;
	}

	public async deleteUser({
		email,
		refreshToken
	}: IDeleteProps): Promise<IDeleteReturn> {
		const userExists = await userModule.findOne({ email });
		if (!userExists) {
			throw ResponseException.badRequest("User not found!");
		}

		if (!refreshToken) {
			throw ResponseException.badRequest("Token not found!");
		}

		const avatarPath: string = path.resolve(__dirname, "..", "static", userExists?.avatar as string);
		const posterPath: string = path.resolve(__dirname, "..", "static", userExists?.poster as string);
		await Promise.all([
			await FilesServices.checkAndDeleteFile(avatarPath),
			await FilesServices.checkAndDeleteFile(posterPath)
		]);

		await TokenSessionRepositoryService.deleteSession({ refreshToken });

		const responseDelete = await userModule.deleteOne({ email });

		return responseDelete;
	}
}

export default new AuthServices();