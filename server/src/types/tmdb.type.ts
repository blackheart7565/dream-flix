
export type TMediaEndpointReturn = string;
interface IMediaType {
	mediaType: string;
}

//========================================================
//				Media List By TMDB
//========================================================

export interface IMediaListProps extends IMediaType {
	mediaCategory: string;
	page: string;
}

//========================================================
//				Media Details By TMDB
//========================================================

export interface IMediaDetailsProps extends IMediaType {
	mediaId: string;
}

//========================================================
//				Media Images By TMDB
//========================================================

export interface IMediaImagesProps extends IMediaType {
	mediaId: string;
}

//========================================================
//				Media Genres By TMDB
//========================================================

export interface IMediaGenresProps extends IMediaType { }

//========================================================
//				Media Video By TMDB
//========================================================

export interface IMediaVideoProps extends IMediaType {
	mediaId: string;
}

//========================================================
//				Media Credits By TMDB
//========================================================

export interface IMediaCreditsProps extends IMediaType {
	mediaId: string;
}

//========================================================
//				Media Recommendations By TMDB
//========================================================

export interface IMediaRecommendationsProps extends IMediaType {
	mediaId: string;
}

//========================================================
//				Media Search By TMDB
//========================================================

export interface IMediaSearchProps extends IMediaType {
	mediaQuery: string;
	page: string;
}