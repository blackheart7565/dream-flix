
import bcrypt from "bcrypt";

import userModule from "../modules/user.module";
import TokenSessionRepositoryService from "./TokenSessionRepositoryService";

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

	public async login({ }: ILoginProps) {

	}

	public async logout({ }: ILogoutProps) {

	}

	public async refresh({ }: IRefreshProps) {

	}

	public async updateUserData({ }: IUpdateProps) {

	}

	public async deleteUser({ }: IDeleteProps) {

	}
}

export default new AuthServices();