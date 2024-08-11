import publicAxios from "../api/client/publicClient";
import { mediaEndpoints } from "../endpoints/mediaEndpoints";

import { mediaConfig } from "../api/config/mediaConfig";

import type { AxiosResponse } from "axios";
import type { IMediaListRequest } from "../types/request/mediaRequest";
import type { IMediaList, IMediaListMovieResult, IMediaListResult, IMediaListTvResult, MediaTypeToResultType } from "../types/response/mediaResponse";


type MediaType = keyof Pick<typeof mediaConfig.types, "movie" | "tv">;
interface IMediaServices { }

class MediaServices implements IMediaServices {

	async getMediaList<T extends IMediaListResult>({
		mediaType,
		mediaCategory,
		page
	}: IMediaListRequest): Promise<IMediaList<T>> {
		try {
			const response: AxiosResponse<IMediaList<T>> = await publicAxios.get<IMediaList<T>>(
				mediaEndpoints.list({
					mediaType,
					mediaCategory,
					page
				})
			);

			return response.data;
		} catch (error) {
			return Promise.reject(error);
		}
	}

	async getMediaListByMediaType(request: { mediaType: 'movie'; mediaCategory: string; page: number; }): Promise<IMediaList<IMediaListMovieResult>>;
	async getMediaListByMediaType(request: { mediaType: 'tv'; mediaCategory: string; page: number; }): Promise<IMediaList<IMediaListTvResult>>;
	async getMediaListByMediaType({
		mediaType,
		mediaCategory,
		page
	}: IMediaListRequest): Promise<IMediaList<IMediaListTvResult> | IMediaList<IMediaListMovieResult> | null> {
		const mediaTypeToResultType = {
			movie: (args: IMediaListRequest): Promise<IMediaList<IMediaListMovieResult>> =>
				this.getMediaList<MediaTypeToResultType["movie"]>(args),
			tv: (args: IMediaListRequest): Promise<IMediaList<IMediaListTvResult>> =>
				this.getMediaList<MediaTypeToResultType["tv"]>(args),
		};

		const getMediaListFunction = mediaTypeToResultType[mediaType as MediaType];

		if (getMediaListFunction) {
			return await getMediaListFunction({ mediaType, mediaCategory, page });
		}

		return null;
	}
}

export default new MediaServices();  