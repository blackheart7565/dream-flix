import type {
	Request as Req,
	Response as Res,
	NextFunction as Next,
} from "express";
import { validationResult } from "express-validator";
import { ResponseException } from "./response.exception";

interface IRequestException { }

class RequestException implements IRequestException {

	validateRouter(req: Req, _: Res, next: Next) {
		const errors = validationResult(req);

		if (!errors.isEmpty())
			return next(ResponseException.badRequest(errors.array()[0].msg, errors.array()));

		next();
	}
}

export default new RequestException();