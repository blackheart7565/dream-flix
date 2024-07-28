import type {
	ILoginProps,
	ILoginReturn,

	IRegistrationProps,
	IRegistrationReturn,

	ILogoutProps,
	ILogoutReturn,

	IRefreshProps,
	IRefreshReturn,

	IUpdateProps,
	IUpdateReturn,

	IDeleteProps,
	IDeleteReturn,
} from "../types/auth.type";

interface IAuthServices { }

class AuthServices implements IAuthServices {

	public async registration({}: IRegistrationProps) {

	}

	public async login({}: ILoginProps) {

	}

	public async logout({}: ILogoutProps) {

	}

	public async refresh({}: IRefreshProps) {

	}

	public async updateUserData({}: IUpdateProps) {

	}

	public async deleteUser({}: IDeleteProps) {

	}
}

export default new AuthServices();