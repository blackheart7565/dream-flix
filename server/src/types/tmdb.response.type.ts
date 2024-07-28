

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

export interface IMediaResult {
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

export interface ITvResult extends IMediaResult {
	origin_country: string[];
	original_name: string;
	first_air_date: string;
	name: string;
}

export interface IMovieResult extends IMediaResult {
	original_title: string;
	release_date: string;
	title: string;
	video: boolean;
}

export type TMediaListItem = IMovieResult | ITvResult;

//#endregion


//========================================================
//				Media Details Types
//========================================================

//#region Media Details Types

export interface IMediaDetails {
	adult: boolean;
	backdrop_path: string;
	genres: IGenre[];
	homepage: string;
	id: number;
	origin_country: string[];
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: IProductionCompany[];
	production_countries: IProductionCountry[];
	spoken_languages: ISpokenLanguage[];
	status: string;
	tagline: string;
	vote_average: number;
	vote_count: number;
}
export interface IMediaDetailsAdditionally extends IMediaDetails {
	images: IMediaImages;
	videos: IMediaVideos;
	credits: IMediaCredits;
	recommendation: IMediaRecommendation<TMediaRecommendationCommon>;
}

export interface IGenre {
	id: number;
	name: string;
}
export interface IProductionCompany {
	id: number;
	logo_path?: string;
	name: string;
	origin_country: string;
}
export interface IProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface ISpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

// # Media Details Movie 

export interface IMediaDetailsMovie extends IMediaDetailsAdditionally {
	belongs_to_collection: IBelongsToCollection;
	budget: number;
	imdb_id: string;
	original_title: string;
	release_date: string;
	revenue: number;
	runtime: number;
	title: string;
	video: boolean;
}
export interface IBelongsToCollection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

// # Media Details TV 

export interface IMediaDetailsTV extends IMediaDetailsAdditionally {
	created_by: any[];
	episode_run_time: any[];
	first_air_date: string;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: ILastEpisodeToAir;
	name: string;
	next_episode_to_air: INextEpisodeToAir;
	networks: INetwork[];
	number_of_episodes: number;
	number_of_seasons: number;
	original_name: string;
	seasons: ISeason[];
	type: string;
}
export interface ILastEpisodeToAir {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: any;
	season_number: number;
	show_id: number;
	still_path: any;
}

export interface INextEpisodeToAir {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: any;
	season_number: number;
	show_id: number;
	still_path: any;
}

export interface INetwork {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface ISeason {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path?: string;
	season_number: number;
	vote_average: number;
}

export type IMediaDetailsCommon = IMediaDetailsMovie | IMediaDetailsTV;

//#endregion


//========================================================
//				Media Details Images Types
//========================================================

//#region Media Details Images Types

export interface IMediaImages {
	backdrops: IBackdropImages[];
	id: number;
	logos: ILogoImages[];
	posters: IPosterImages[];
}
export interface IBackdropImages {
	aspect_ratio: number;
	height: number;
	iso_639_1?: string;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}
export interface ILogoImages {
	aspect_ratio: number;
	height: number;
	iso_639_1: string;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}
export interface IPosterImages {
	aspect_ratio: number;
	height: number;
	iso_639_1?: string;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}

//#endregion


//========================================================
//				Media Details Videos Types
//========================================================

//#region Media Details Videos Types

export interface IMediaVideos {
	id: number;
	results: IMediaVideosResult[];
}

export interface IMediaVideosResult {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

//#endregion


//========================================================
//				Media Details Credits Types
//========================================================

//#region Media Details Credits Types

export interface IMediaCredits {
	id: number;
	cast: TCreditsCastCommon[];
	crew: ICreditsCrew[];
}

export interface ICreditsCast {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path?: string;
	credit_id: string;
	character: string;
	order: number;
}

export interface ICreditsCrew {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path?: string;
	credit_id: string;
	department: string;
	job: string;
}

// # Media Credits Movie;
export interface ICreditsCastMovie extends ICreditsCast {
	cast_id: number;
}

// # Media Credits Tv;

export interface ICreditsCastTv extends ICreditsCast { }


export type TCreditsCastCommon = ICreditsCastMovie | ICreditsCastTv;

//#endregion



//========================================================
//				Media Details Recommendation Types
//========================================================

//#region Media Details Recommendation Types


export interface IMediaRecommendation<T extends IMediaRecommendationResult> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}

export interface IMediaRecommendationResult {
	backdrop_path: string;
	id: number;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	vote_average: number;
	vote_count: number;
}


// # Media Recommendations Movie

export interface IMediaRecommendationMovie extends IMediaRecommendationResult {
	title: string;
	original_title: string;
	release_date: string;
	video: boolean;
}


// # Media Recommendations Tv

export interface IMediaRecommendationTv extends IMediaRecommendationResult {
	name: string;
	original_name: string;
	first_air_date: string;
	origin_country: string[];
}

export type TMediaRecommendationCommon = IMediaRecommendationMovie | IMediaRecommendationTv;

//#endregion


//========================================================
//				Media Details Genre Types
//========================================================

//#region Media Details Genre Types

export interface IMediaGenres {
	genres: IMediaGenre[];
}

export interface IMediaGenre {
	id: number;
	name: string;
}

//#endregion


//========================================================
//				Media Search Types
//========================================================

//#region Media Search Types

export interface IMediaSearch<T extends IMediaSearchResult> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}

export interface IMediaSearchResult {
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

// # Media Genre List Movie
export interface IMediaSearchMovieResult extends IMediaSearchResult {
	video: boolean;
	original_title: string;
	release_date: string;
	title: string;
}

// # Media Genre List Tv
export interface IMediaSearchTvResult extends IMediaSearchResult {
	name: string;
	origin_country: string[];
	original_name: string;
	first_air_date: string;
}

export type TMediaSearchCommon = IMediaSearchMovieResult | IMediaSearchTvResult;

//#endregion


