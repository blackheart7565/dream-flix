import jwt from "jsonwebtoken";

import sessionTokenModule from "../modules/sessionToken.module";

import type { IDtoUser } from "../types/user.type";
import type {
	ITokensReturn
} from "../types/auth.type";
import type {
	IMethodCreateSessionProps,
	IMethodCreateSessionReturn,
} from "../types/sessionToken.type";

interface ITokenSessionRepositoryService { }

class TokenSessionRepositoryService implements ITokenSessionRepositoryService {

	generateTokens(payload: IDtoUser): ITokensReturn {
		const ACCESS_TOKEN_SECRET_KEY: string = process.env.TOKEN_ACCESS_SECRET as string;
		const REFRESH_TOKEN_SECRET_KEY: string = process.env.TOKEN_REFRESH_SECRET as string;

		const accessToken: string = jwt.sign(payload, ACCESS_TOKEN_SECRET_KEY, {
			expiresIn: "30m",
		});
		const refreshToken: string = jwt.sign(payload, REFRESH_TOKEN_SECRET_KEY, {
			expiresIn: "30d",
		});

		return {
			accessToken,
			refreshToken,
		};
	}

	async create({
		userId,
		refreshToken,
		fingerprint
	}: IMethodCreateSessionProps): Promise<IMethodCreateSessionReturn> {
		const session = await sessionTokenModule.create({
			userId,
			refresh_token: refreshToken,
			finger_print: fingerprint.hash,
		});
		return session;
	}
}

export default new TokenSessionRepositoryService();