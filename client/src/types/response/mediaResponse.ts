

//========================================================
//				Media List Types
//========================================================

//#region Media List Types

export interface IMediaList<T> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}

export interface IMediaListResult {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}

export interface IMediaListTvResult extends IMediaListResult {
	origin_country: string[];
	original_name: string;
	first_air_date: string;
	name: string;
}

export interface IMediaListMovieResult extends IMediaListResult {
	original_title: string;
	release_date: string;
	title: string;
	video: boolean;
}

export type IMediaListCommonResult = IMediaListMovieResult | IMediaListTvResult;

// Маппинг типов
export type MediaTypeToResultType = {
	movie: IMediaListMovieResult;
	tv: IMediaListTvResult;
};

//#endregion
