import type { IMediaEndpoints } from "../types/endpoints";
import type {
	IMediaDetailsRequest,
	IMediaGenreRequest,
	IMediaListRequest,
	IMediaSearchRequest
} from "../types/request/mediaRequest";

export const mediaEndpoints: IMediaEndpoints = {
	list: ({ mediaType, mediaCategory, page }: IMediaListRequest): string => {
		return `/${mediaType}/list/${mediaCategory}?page=${page}`;
	},
	details: ({ mediaType, mediaId }: IMediaDetailsRequest): string => {
		return `/${mediaType}/details/${mediaId}`;
	},
	genre: ({ mediaType }: IMediaGenreRequest): string => {
		return `/${mediaType}/genre/list`;
	},
	search: ({ mediaType, mediaQuery, page }: IMediaSearchRequest): string => {
		return `/${mediaType}/search?query=${mediaQuery}&page=${page}`;
	}
};