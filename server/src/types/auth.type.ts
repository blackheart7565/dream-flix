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

export interface ILoginProps { }
export interface ILoginReturn { }


// ================================================
// 					Logout
// ================================================

export interface ILogoutProps { }

export interface ILogoutReturn { }


// ================================================
// 					Refresh
// ================================================

export interface IRefreshProps { }
export interface IRefreshReturn { }

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


