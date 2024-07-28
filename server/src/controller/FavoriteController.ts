import {
	Response as Res,
	Request as Req,
	NextFunction as Next,
} from "express";

import FavoriteServices from "../services/FavoriteServices";

import type { TError } from "../types/common";

import type {
	IGetAllReturn,
	IFavoriteCreateReturn
} from "../types/favorite.type";

interface IFavoriteController { }

class FavoriteController implements IFavoriteController {

	public async getAll(req: Req, res: Res, next: Next): Promise<Res<IGetAllReturn> | void> {
		try {
			const { id } = req.user;

			const response = await FavoriteServices.getAll(id);

			return res.status(200).json({
				result: [...response],
				totalCount: response.length
			});
		} catch (error: TError) {
			next(error);
		}
	}

	public async create(req: Req, res: Res, next: Next): Promise<Res<IFavoriteCreateReturn> | void> {
		try {
			const {
				userId,
				mediaId,
				mediaType,
				mediaPosterPath,
				mediaTitle,
				mediaRating,
				mediaReleaseDate,
			} = req.body;

			await FavoriteServices.create({
				userId,
				mediaId,
				mediaType,
				mediaPosterPath,
				mediaTitle,
				mediaRating,
				mediaReleaseDate,
			});

			return res.status(200).json("Successfully added to favorites!");
		} catch (error: TError) {
			next(error);
		}
	}

	public async delete(req: Req, res: Res, next: Next) {

	}

	public async deleteAll(req: Req, res: Res, next: Next) {

	}
}


export default new FavoriteController();