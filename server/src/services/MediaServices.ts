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
} from "../types/tmdb.response.type";

interface IMediaServices { }

class MediaServices implements IMediaServices {

	async mediaList({ mediaType, mediaCategory, page }: IMediaListProps): Promise<IMediaList<TMediaListItem>> {
		const url: string = tmdbEndpoint.mediaList({ mediaType, mediaCategory, page });
		const response = await getTmdbAxios<IMediaList<TMediaListItem>>(url);
		return response;
	}

	async mediaDetails({ mediaType, mediaId }: IMediaDetailsProps) {
		
	}

	async mediaGenre({ mediaType }: IMediaGenresProps) {
		
	}

	async mediaSearch({ mediaType, mediaQuery, page }: IMediaSearchProps) {
		
	}
}

export default new MediaServices();