import { tmdbBaseEndpoint } from "./tmdbBase.endpoint";

import type {
	IMediaListProps,
	IMediaDetailsProps,
	IMediaImagesProps,
	IMediaVideoProps,
	IMediaCreditsProps,
	IMediaRecommendationsProps,
	IMediaGenresProps,
	IMediaSearchProps,

	TMediaEndpointReturn,
} from "../types/tmdb.type";

export const tmdbEndpoint = {
	mediaList: ({
		mediaType, mediaCategory, page
	}: IMediaListProps): TMediaEndpointReturn => {
		return tmdbBaseEndpoint(
			`/${mediaType}/${mediaCategory}`, { page }
		);
	},

	mediaDetails: ({
		mediaType, mediaId
	}: IMediaDetailsProps): TMediaEndpointReturn => {
		return tmdbBaseEndpoint(
			`/${mediaType}/${mediaId}`
		);
	},

	mediaImages: ({
		mediaType, mediaId
	}: IMediaImagesProps): TMediaEndpointReturn => {
		return tmdbBaseEndpoint(
			`/${mediaType}/${mediaId}/images`
		);
	},

	mediaGenres: ({
		mediaType,
	}: IMediaGenresProps): TMediaEndpointReturn => {
		return tmdbBaseEndpoint(
			`/genre/${mediaType}/list`
		);
	},

	mediaVideos: ({
		mediaType, mediaId
	}: IMediaVideoProps): TMediaEndpointReturn => {
		return tmdbBaseEndpoint(
			`/${mediaType}/${mediaId}/videos`
		);
	},

	mediaCredits: ({
		mediaType, mediaId
	}: IMediaCreditsProps): TMediaEndpointReturn => {
		return tmdbBaseEndpoint(
			`/${mediaType}/${mediaId}/credits`
		);
	},

	mediaRecommendations: ({
		mediaType, mediaId
	}: IMediaRecommendationsProps): TMediaEndpointReturn => {
		return tmdbBaseEndpoint(
			`/${mediaType}/${mediaId}/recommendations`
		);
	},

	mediaSearch: ({
		mediaType, mediaQuery, page
	}: IMediaSearchProps): TMediaEndpointReturn => {
		return tmdbBaseEndpoint(
			`/search/${mediaType}`, {
			query: mediaQuery,
			page
		});
	}
};