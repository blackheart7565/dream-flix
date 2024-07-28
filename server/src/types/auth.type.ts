import type { DeleteResult } from "mongodb";
import { FingerprintResult } from "express-fingerprint";

import type { IDtoUser, IUser } from "./user.type";

export interface ITokensReturn {
	accessToken: string;
	refreshToken: string;
}

export interface IResponseReturn extends ITokensReturn {
	user: IDtoUser;
}

// ================================================
// 					Registration
// ================================================

export interface IRegistrationProps extends IUser {
	fingerprint: FingerprintResult;
}
export interface IRegistrationReturn extends IResponseReturn { }

// ================================================
// 					Login
// ================================================

export interface ILoginProps extends Pick<IUser, "email" | "password"> {
	fingerprint: FingerprintResult;
}
export interface ILoginReturn extends IResponseReturn { }


// ================================================
// 					Logout
// ================================================

export interface ILogoutProps extends Pick<ITokensReturn, "refreshToken"> { }

export interface ILogoutReturn extends DeleteResult { }


// ================================================
// 					Refresh
// ================================================

export interface IRefreshProps extends Pick<ITokensReturn, "refreshToken"> {
	fingerprint: FingerprintResult;
}
export interface IRefreshReturn extends IResponseReturn { }

// ================================================
// 					Update
// ================================================

export interface IUpdateProps { }

export interface IUpdateReturn { }

// ================================================
// 					Delete
// ================================================

export interface IDeleteProps { }

export interface IDeleteReturn { }


