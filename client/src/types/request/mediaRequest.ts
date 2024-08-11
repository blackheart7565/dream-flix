
interface TMediaTypeRequest {
	mediaType: string;
}
interface IMediaPageRequest {
	page: number;
}

export interface IMediaListRequest extends TMediaTypeRequest, IMediaPageRequest {
	mediaCategory: string;
}

export interface IMediaDetailsRequest extends TMediaTypeRequest {
	mediaId: number;
}

export interface IMediaGenreRequest extends TMediaTypeRequest { }

export interface IMediaSearchRequest extends TMediaTypeRequest, IMediaPageRequest {
	mediaQuery: string;
} 