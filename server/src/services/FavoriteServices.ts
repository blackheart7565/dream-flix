
import favoriteModule from "../modules/favorite.module";

import { ResponseException } from "../exceptions/response.exception";

import type { IObjectIdType } from "../types/db.type";
import type {
	IGetAllReturn,
	IFavoriteCreateProps,
	IFavoriteCreateReturn,
	IFavoriteDeleteProps,
	IFavoriteDeleteReturn,
	IFavoriteDeleteAllProps,
	IFavoriteDeleteAllReturn,
} from "../types/favorite.type";

interface IFavoriteServices { }

class FavoriteServices implements IFavoriteServices {

	public async getAll(userId: IObjectIdType): Promise<IGetAllReturn> {
		const response = await favoriteModule
			.find({ userId })
			.sort("-createdAt");
		return response;
	}

	public async create({
		userId,
		mediaId,
		mediaType,
		mediaPosterPath,
		mediaTitle,
		mediaRating,
		mediaReleaseDate
	}: IFavoriteCreateProps): Promise<IFavoriteCreateReturn> {

		const favoriteExists = await favoriteModule.findOne({ userId, mediaId });

		if (favoriteExists) {
			throw ResponseException.success("Already in favorites");
		}

		const response = await favoriteModule.create({
			userId,
			mediaId,
			mediaType,
			mediaPosterPath,
			mediaTitle,
			mediaRating,
			mediaReleaseDate
		});

		return response;
	}

	public async delete({
		userId,
		favoriteId
	}: IFavoriteDeleteProps): Promise<IFavoriteDeleteReturn> {
		const favoriteExists = await favoriteModule.findOne({
			_id: favoriteId,
			userId,
		});

		if (!favoriteExists) {
			throw ResponseException.badRequest(`Favorite item with ID ${favoriteId} not found!`);
		}

		const response = await favoriteExists.deleteOne();

		return response;
	}

	public async deleteAll({
		userId,
	}: IFavoriteDeleteAllProps): Promise<IFavoriteDeleteAllReturn[] | void> {

	}
}

export default new FavoriteServices();