import {
	Request as Req,
	Response as Res,
	NextFunction as Next,
} from "express";

interface IAuthController { }

class AuthController implements IAuthController {

	public async registration(req: Req, res: Res, next: Next) {
		
	}

	public async login(req: Req, res: Res, next: Next) {
				
	}

	public async logout(req: Req, res: Res, next: Next) {
		
	}

	public async refresh(req: Req, res: Res, next: Next) {
		
	}

	public async updateUserData(req: Req, res: Res, next: Next) {
		
	}

	public async deleteUser(req: Req, res: Res, next: Next) {
		
	}
}

export default new AuthController();