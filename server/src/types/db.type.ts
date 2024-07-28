import mongoose from "mongoose";

import type { IUser } from "./user.type";

export type IObjectIdType = typeof mongoose.Types.ObjectId;

export interface DocumentResult<T> {
	_doc: T;
}

export interface IUserScheme extends DocumentResult<IUser> {
	username: string;
	email: string;
	password: string;
	avatar: string;
	poster: string;
}
