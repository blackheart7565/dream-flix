import {
	Response as Res
} from "express";

interface ICookieServices {
	saveCookieRefreshToken: (res: Res, refreshToken: string) => void;
	removeRefreshToken: (res: Res) => void;
}

class CookieServices implements ICookieServices {
	private _maxAgeRefreshToken: number = 30 * 24 * 60 * 60 * 1000;
	private _nameRefreshToken: string = "refreshToken";

	/**
	 * Указывать в таком формате
	 * 30 * 24 * 60 * 60 * 1000 === 30 day
	 * 
	 * Описание:
	 * 30 -> дней
	 * 24 -> часа
	 * 60 -> минут
	 * 60 -> секунд
	 * 1000 -> миллисекунд
	 */
	public set setMaxRefreshToken(maxAge: number) {
		this._maxAgeRefreshToken = maxAge;
	}

	public set setNameRefreshToken(newRefreshToken: string) {
		this._nameRefreshToken = newRefreshToken;
	}


	public saveCookieRefreshToken(res: Res, refreshToken: string): void {
		const nameRefreshString: string = "refreshToken";

		res.cookie(nameRefreshString, refreshToken, {
			maxAge: this._maxAgeRefreshToken,
			httpOnly: true,
			// secure: true,
		});
	}

	public removeRefreshToken(res: Res): void {
		res.clearCookie(this._nameRefreshToken);
	}
}

export default new CookieServices();