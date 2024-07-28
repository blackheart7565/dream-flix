import {
	Response as Res,
	Request as Req,
	NextFunction as Next,
} from "express";

interface IFavoriteController { }

class FavoriteController implements IFavoriteController {

	public async getAll(req: Req, res: Res, next: Next) {

	}

	public async create(req: Req, res: Res, next: Next) {

	}

	public async delete(req: Req, res: Res, next: Next) {

	}

	public async deleteAll(req: Req, res: Res, next: Next) {

	}
}


export default new FavoriteController();