import { TError } from "./common";

export interface IResponseException {
	get getStatus(): number;
	get getMessage(): string;
	get getErrors(): any;
}

export interface IResponseData {
	status: number;
	message: string;
	errors?: TError;
}