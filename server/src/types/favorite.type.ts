import type { DeleteResult } from "mongodb";

import type { IObjectIdType } from "./db.type";


export interface IFavorite {
	userId: IObjectIdType,
	mediaId: IObjectIdType,
	mediaType: string,
	mediaPosterPath: string,
	mediaTitle: string,
	mediaRating: number,
	mediaReleaseDate: string,
}

// ================================================
// 					Get All
// ================================================

export type IGetAllReturn = IFavorite[];

// ================================================
// 					Create
// ================================================

export interface IFavoriteCreateProps extends IFavorite { }

export interface IFavoriteCreateReturn { }

// ================================================
// 					Delete
// ================================================

export interface IFavoriteDeleteProps {
	userId: IObjectIdType,
	favoriteId: string,
}

export interface IFavoriteDeleteReturn extends DeleteResult { }


// ================================================
// 					Delete All
// ================================================

export interface IFavoriteDeleteAllProps {
	userId: IObjectIdType;
}

export interface IFavoriteDeleteAllReturn extends DeleteResult { }



