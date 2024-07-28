
import favoriteModule from "../modules/favorite.module";

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
	}: IFavoriteCreateProps): Promise<IFavoriteCreateReturn | void> {

	}

	public async delete({
		userId,
		favoriteId
	}: IFavoriteDeleteProps): Promise<IFavoriteDeleteReturn | void> {

	}

	public async deleteAll({
		userId,
	}: IFavoriteDeleteAllProps): Promise<IFavoriteDeleteAllReturn[] | void> {

	}
}

export default new FavoriteServices();