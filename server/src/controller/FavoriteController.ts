import {
	Response as Res,
	Request as Req,
	NextFunction as Next,
} from "express";

import FavoriteServices from "../services/FavoriteServices";

import type { TError } from "../types/common";
import { ResponseException } from "../exceptions/response.exception";

import type {
	IGetAllReturn,
	IFavoriteCreateReturn,
	IFavoriteDeleteReturn,
	IFavoriteDeleteAllReturn
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

	public async delete(req: Req, res: Res, next: Next): Promise<Res<IFavoriteDeleteReturn> | void> {
		try {
			const { favoriteId } = req.params;
			const { id } = req.user;

			const response = await FavoriteServices.delete({
				userId: id,
				favoriteId,
			});

			if (!response) {
				throw ResponseException.badRequest("Failed to remove item from favorites! Please try again later.");
			}

			return res.status(200).json("Successfully removed from favorites");
		} catch (error: TError) {
			next(error);
		}
	}

	public async deleteAll(req: Req, res: Res, next: Next): Promise<Res<IFavoriteDeleteAllReturn[]> | void> {
		try {
			const { id } = req.user;

			const deleteResult = await FavoriteServices.deleteAll({
				userId: id,
			});

			if (!deleteResult || deleteResult.length <= 0) {
				throw ResponseException.badRequest("Failed to remove items from favorites! Please try again later.");
			}

			return res.status(200).json("Items successfully removed from favorites");
		} catch (error: TError) {
			next(error);
		}
	}
}


export default new FavoriteController();