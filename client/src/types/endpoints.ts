import type {
	IMediaDetailsRequest,
	IMediaGenreRequest,
	IMediaListRequest,
	IMediaSearchRequest
} from "./request/mediaRequest";

export interface IPageRoutesEndpoints {
	home: string;
	movie: string;
	serials: string;
	details: string;
	pageNotFound: string;
	settings: string;
}

export interface IMediaEndpoints {
	list: ({ mediaType, mediaCategory, page }: IMediaListRequest) => string;
	details: ({ mediaType, mediaId }: IMediaDetailsRequest) => string;
	genre: ({ mediaType }: IMediaGenreRequest) => string;
	search: ({ mediaType, mediaQuery, page }: IMediaSearchRequest) => string;
}