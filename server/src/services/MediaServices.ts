
import type {
	IMediaListProps,
	IMediaDetailsProps,
	IMediaGenresProps,
	IMediaSearchProps,
} from "../types/tmdb.type";


interface IMediaServices { }

class MediaServices implements IMediaServices {

	async mediaList({ mediaType, mediaCategory, page }: IMediaListProps) {
		
	}

	async mediaDetails({ mediaType, mediaId }: IMediaDetailsProps) {
		
	}

	async mediaGenre({ mediaType }: IMediaGenresProps) {
		
	}

	async mediaSearch({ mediaType, mediaQuery, page }: IMediaSearchProps) {
		
	}
}

export default new MediaServices();