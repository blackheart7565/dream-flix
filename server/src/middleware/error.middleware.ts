import {
	Response as Res,
	Request as Req,
	NextFunction as Next,
} from "express";

import { ResponseException } from "../exceptions/response.exception";

export const errorMiddleware = (err: any, _: Req, res: Res, next: Next) => {
	if (err instanceof ResponseException) {
		return res
			.status(err.getStatus)
			.json({
				status: err.getStatus,
				message: err.getMessage,
				errors: err.getErrors,
			});
	}

	return res
		.status(ResponseException.STATUS_INTERNAL_SERVER_ERROR)
		.json(ResponseException.internalServerError());
};