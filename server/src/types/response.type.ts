
export interface IResponseException {
	get getStatus(): number;
	get getMessage(): string;
	get getErrors(): any;
}
