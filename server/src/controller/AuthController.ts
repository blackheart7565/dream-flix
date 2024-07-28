import {
	Request as Req,
	Response as Res,
	NextFunction as Next,
} from "express";

import CookieServices from "../services/CookieServices";
import AuthServices from "../services/AuthServices";

import type {
	IRegistrationReturn,
	ILoginReturn
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

	public async logout(req: Req, res: Res, next: Next) {

	}

	public async refresh(req: Req, res: Res, next: Next) {

	}

	public async updateUserData(req: Req, res: Res, next: Next) {

	}

	public async deleteUser(req: Req, res: Res, next: Next) {

	}
}

export default new AuthController();