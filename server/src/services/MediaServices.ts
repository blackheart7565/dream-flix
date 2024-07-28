import { getTmdbAxios } from "../api/axios";
import { tmdbEndpoint } from "../endpoints/tmdb.endpoint";

import type {
	IMediaListProps,
	IMediaDetailsProps,
	IMediaGenresProps,
	IMediaSearchProps,
} from "../types/tmdb.type";

import type {
	IMediaList,
	TMediaListItem,
	IMediaDetailsCommon,
	IMediaImages,
	IMediaVideos,
	IMediaCredits,
	IMediaRecommendation,
	TMediaRecommendationCommon,
	IMediaGenres
} from "../types/tmdb.response.type";

interface IMediaServices { }

class MediaServices implements IMediaServices {

	async mediaList({ mediaType, mediaCategory, page }: IMediaListProps): Promise<IMediaList<TMediaListItem>> {
		const url: string = tmdbEndpoint.mediaList({ mediaType, mediaCategory, page });
		const response = await getTmdbAxios<IMediaList<TMediaListItem>>(url);
		return response;
	}

	async mediaDetails({ mediaType, mediaId }: IMediaDetailsProps): Promise<IMediaDetailsCommon> {
		const params: IMediaDetailsProps = { mediaType, mediaId };

		const urlDetails: string = tmdbEndpoint.mediaDetails(params);
		const urlImages: string = tmdbEndpoint.mediaImages(params);
		const urlVideos: string = tmdbEndpoint.mediaVideos(params);
		const urlCredits: string = tmdbEndpoint.mediaCredits(params);
		const urlRecommendations: string = tmdbEndpoint.mediaRecommendations(params);

		const responseDetails = await getTmdbAxios<IMediaDetailsCommon>(urlDetails);
		const responseImages = await getTmdbAxios<IMediaImages>(urlImages);
		const responseVideos = await getTmdbAxios<IMediaVideos>(urlVideos);
		const responseCredits = await getTmdbAxios<IMediaCredits>(urlCredits);
		const responseRecommendation = await getTmdbAxios<IMediaRecommendation<TMediaRecommendationCommon>>(urlRecommendations);

		responseDetails.images = responseImages;
		responseDetails.videos = responseVideos;
		responseDetails.credits = responseCredits;
		responseDetails.recommendation = responseRecommendation;

		return responseDetails;
	}

	async mediaGenre({ mediaType }: IMediaGenresProps): Promise<IMediaGenres> {
		const url: string = tmdbEndpoint.mediaGenres({ mediaType });
		const response = await getTmdbAxios<IMediaGenres>(url);
		return response;
	}

	async mediaSearch({ mediaType, mediaQuery, page }: IMediaSearchProps) {

	}
}

export default new MediaServices();