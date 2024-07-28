import type {
	Request as Req,
	Response as Res,
	NextFunction as Next,
} from "express";

import MediaServices from "../services/MediaServices";

import { ResponseException } from "../exceptions/response.exception";

import type { TError } from "../types/common";
import type {
	IMediaList,
	TMediaListItem,
	IMediaDetailsCommon,
	IMediaGenres
} from "../types/tmdb.response.type";

interface IMediaController { }

class MediaController implements IMediaController {

	async mediaList(req: Req, res: Res, next: Next): Promise<Res<IMediaList<TMediaListItem>> | void> {
		try {
			const { mediaType, mediaCategory } = req.params;
			const { page } = req.query;

			const pageNum: number = parseInt(page as string, 10);
			if (isNaN(pageNum) || pageNum <= 0) {
				throw ResponseException.badRequest("Invalid page number");
			}

			const response = await MediaServices.mediaList({
				mediaType,
				mediaCategory,
				page: pageNum.toString(),
			});

			if (!response || response.results.length <= 0) {
				throw ResponseException.notFound();
			}

			return res.status(200).json(response);
		} catch (error: TError) {
			next(error);
		}
	}

	async mediaDetails(req: Req, res: Res, next: Next): Promise<Res<IMediaDetailsCommon> | void> {
		try {
			const { mediaType, mediaId } = req.params;

			const response = await MediaServices.mediaDetails({
				mediaType, mediaId
			});

			if (!response || Object.keys(response).length <= 0) {
				throw ResponseException.notFound();
			}

			return res.status(200).json(response);
		} catch (error: TError) {
			next(error);
		}
	}

	async mediaGenre(req: Req, res: Res, next: Next): Promise<Res<IMediaGenres> | void> {
		try {
			const { mediaType } = req.params;

			const response = await MediaServices.mediaGenre({ mediaType });

			if (!response || response.genres.length <= 0) {
				throw ResponseException.notFound();
			}

			return res.status(200).json(response);
		} catch (error: TError) {
			next(error);
		}
	}

	async mediaSearch(req: Req, res: Res, next: Next) {

	}
}

export default new MediaController();