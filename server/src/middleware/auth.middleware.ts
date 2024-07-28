import type {
	Request as Req,
	Response as Res,
	NextFunction as Next,
} from "express";

import TokenSessionRepositoryService from "../services/TokenSessionRepositoryService";

import { ResponseException } from "../exceptions/response.exception";

export const authMiddleware = (req: Req, _: Res, next: Next) => {
	try {
		const authorizationToken = req.headers.authorization;

		if (!authorizationToken) {
			return next(ResponseException.unauthorized());
		}

		const accessToken = authorizationToken.split(" ")[1];
		if (!accessToken) {
			return next(ResponseException.unauthorized());
		}

		const validateAccessToken = TokenSessionRepositoryService.validateAccessToken(accessToken);
		if (!validateAccessToken) {
			return next(ResponseException.unauthorized());
		}

		req.user = validateAccessToken;
		next();
	} catch {
		next(ResponseException.unauthorized());
	}
};