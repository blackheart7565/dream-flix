import {
	Request as Req,
	Response as Res,
	NextFunction as Next,
} from "express";
import fileUpload from "express-fileupload";

import CookieServices from "../services/CookieServices";
import AuthServices from "../services/AuthServices";

import type { TError } from "../types/common";

import type {
	IRegistrationReturn,
	ILoginReturn,
	ILogoutReturn,
	IUpdateReturn,
	IDeleteReturn
} from "../types/auth.type";

interface IAuthController { }

class AuthController implements IAuthController {

	public async registration(req: Req, res: Res, next: Next): Promise<Res<IRegistrationReturn> | void> {
		try {
			const { username, email, password, avatar, poster } = req.body;
			const { fingerprint } = req;

			const {
				user,
				accessToken,
				refreshToken,
			} = await AuthServices.registration({
				username,
				email,
				password,
				avatar,
				poster,
				fingerprint: fingerprint!
			});

			CookieServices.saveCookieRefreshToken(res, refreshToken);

			return res.status(200).json({
				user,
				accessToken,
				refreshToken
			});
		} catch (error: any) {
			next(error);
		}
	}

	public async login(req: Req, res: Res, next: Next): Promise<Res<ILoginReturn> | void> {
		try {
			const {
				email,
				password
			} = req.body;
			const { fingerprint } = req;

			const {
				user,
				accessToken,
				refreshToken,
			} = await AuthServices.login({
				email,
				password,
				fingerprint: fingerprint!
			});

			CookieServices.saveCookieRefreshToken(res, refreshToken);

			return res.status(200).json({
				user,
				accessToken,
				refreshToken,
			});
		} catch (error: any) {
			next(error);
		}
	}

	public async logout(req: Req, res: Res, next: Next): Promise<Res<ILogoutReturn> | void> {
		try {
			const { refreshToken } = req.cookies;

			const logout = await AuthServices.logout({ refreshToken });

			CookieServices.removeRefreshToken(res);

			return res.status(200).json({ logout });
		} catch (error: TError) {
			next(error);
		}
	}

	public async refresh(req: Req, res: Res, next: Next): Promise<Res<ILogoutReturn> | void> {
		try {
			const { refreshToken } = req.cookies;
			const { fingerprint } = req;

			const refreshResult = await AuthServices.refresh({
				refreshToken,
				fingerprint: fingerprint!
			});

			CookieServices.saveCookieRefreshToken(res, refreshResult.refreshToken);

			return res.status(200).json({
				user: refreshResult.user,
				accessToken: refreshResult.accessToken,
				refreshToken: refreshResult.refreshToken,
			});
		} catch (error: TError) {
			next(error);
		}
	}

	public async updateUserData(req: Req, res: Res, next: Next): Promise<Res<IUpdateReturn> | void> {
		try {
			const { username, email } = req.body;
			const { avatar, poster } = (req.files || {}) as fileUpload.FileArray;

			const response = await AuthServices.updateUserData({
				username,
				email,
				avatar: avatar as fileUpload.UploadedFile,
				poster: poster as fileUpload.UploadedFile
			});

			return res.status(200).json({
				message: "User data updated successfully!",
				details: { ...response }
			});
		} catch (error: TError) {
			next(error);
		}
	}

	public async deleteUser(req: Req, res: Res, next: Next): Promise<Res<IDeleteReturn> | void> {
		try {
			const { email } = req.body;
			const { refreshToken } = req.cookies;

			const response = await AuthServices.deleteUser({
				email,
				refreshToken
			});

			CookieServices.removeRefreshToken(res);

			return res.status(200).json({
				message: "User delete successfully!",
				details: { ...response }
			});
		} catch (error: TError) {
			next(error);
		}
	}
}

export default new AuthController();