import { IObjectIdType } from "./db.type";

export interface IUser {
	username: string;
	email: string;
	password: string;
	avatar: string;
	poster: string;
}

export interface IDtoUser extends Omit<IUser, "password"> {
	id: IObjectIdType;
}