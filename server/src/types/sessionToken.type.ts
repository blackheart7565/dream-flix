import type { FingerprintResult } from "express-fingerprint";

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
