import type {
	IMediaListCommonResult,
	IMediaListMovieResult,
	IMediaListTvResult
} from "../types/response/mediaResponse";

export function isValidateMediaListType(mediaType: 'tv', item: IMediaListCommonResult): IMediaListTvResult;
export function isValidateMediaListType(mediaType: 'movie', item: IMediaListCommonResult): IMediaListMovieResult;
export function isValidateMediaListType(mediaType: 'tv' | 'movie', item: IMediaListCommonResult): IMediaListCommonResult | null {
	if (mediaType === 'movie') {
		return item as IMediaListMovieResult;
	}
	if (mediaType === 'tv') {
		return item as IMediaListTvResult;
	}
	return null;
}