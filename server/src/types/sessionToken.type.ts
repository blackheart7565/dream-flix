import type { FingerprintResult } from "express-fingerprint";
import type { DeleteResult } from "mongodb";

import type { ITokensReturn } from "./auth.type";
import type {
	IObjectIdType,
	ISessionToken
} from "./db.type";


// ================================================================================================
// 										Create Session
// ================================================================================================
export interface IMethodCreateSessionProps {
	userId: IObjectIdType,
	refreshToken: string,
	fingerprint: FingerprintResult,
}
export interface IMethodCreateSessionReturn extends ISessionToken { }

// ================================================================================================
// 						Compare Session Token By UserId and Fingerprint
// ================================================================================================

export interface ICompareSessionByUserIdAndFingerprintProps {
	userId: IObjectIdType,
	fingerprint: FingerprintResult,
}
export type ICompareSessionByUserIdAndFingerprintReturn = ISessionToken | null;

// ================================================================================================
// 						Compare Session Token By RefreshToken
// ================================================================================================

export interface ICompareSessionByRefreshTokenProps extends Pick<ITokensReturn, "refreshToken"> {}
export type ICompareSessionByRefreshTokenReturn = ISessionToken | null;

// ================================================================================================
// 						Delete Session Token By RefreshToken
// ================================================================================================

export interface IDeleteSessionProps extends Pick<ITokensReturn, "refreshToken"> { }

export interface IDeleteSessionReturn extends DeleteResult { };