import type { TError } from "../types/common";
import type {
	IResponseException
} from "../types/response.type";


interface IConstructorProps {
	status: number;
	message: string;
	errors?: TError;
}

export class ResponseException implements IResponseException {
	private _status: number;
	private _message: string;
	private _errors: TError;

	public static readonly STATUS_OK = 200;
	public static readonly STATUS_UNAUTHORIZED = 401;
	public static readonly STATUS_BAD_REQUEST = 400;
	public static readonly STATUS_FORBIDDEN = 403;
	public static readonly STATUS_NOT_FOUND = 404;
	public static readonly STATUS_INTERNAL_SERVER_ERROR = 500;

	private static readonly MESSAGE_SUCCESS = "The operation was completed successfully.";
	private static readonly MESSAGE_UNAUTHORIZED = "Authorization error. Please check your credentials.";
	private static readonly MESSAGE_FORBIDDEN = "Access denied. You do not have permission to perform this operation.";
	private static readonly MESSAGE_NOT_FOUND = "The requested resource was not found.";
	private static readonly MESSAGE_INTERNAL_SERVER_ERROR = "An internal server error occurred. Please try again later.";

	constructor({ status, message, errors }: IConstructorProps) {
		this._status = status;
		this._errors = errors;
		this._message = message;
	}

	public get getStatus(): number {
		return this._status;
	}
	public get getMessage(): string {
		return this._message;
	}
	public get getErrors(): TError {
		return this._errors;
	}

	public static success(message?: string): ResponseException {
		return new ResponseException({
			status: this.STATUS_OK,
			message: message || this.MESSAGE_SUCCESS,
		});
	}

	public static unauthorized(): ResponseException {
		return new ResponseException({
			status: this.STATUS_UNAUTHORIZED,
			message: this.MESSAGE_UNAUTHORIZED,
		});
	}

	public static badRequest(message: string, errors?: TError): ResponseException {
		return new ResponseException({
			status: this.STATUS_BAD_REQUEST,
			message,
			errors,
		});
	}

	public static forbidden(errors?: TError): ResponseException {
		return new ResponseException({
			status: this.STATUS_FORBIDDEN,
			message: this.MESSAGE_FORBIDDEN,
			errors,
		});
	}

	public static notFound(message?: string): ResponseException {
		return new ResponseException({
			status: this.STATUS_NOT_FOUND,
			message: message || this.MESSAGE_NOT_FOUND,
		});
	}

	public static internalServerError(): ResponseException {
		return new ResponseException({
			status: this.STATUS_INTERNAL_SERVER_ERROR,
			message: this.MESSAGE_INTERNAL_SERVER_ERROR,
		});
	}
};