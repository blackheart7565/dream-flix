
const tmdbBaseUrl: string = process.env.TMDB_BASE_URL as string;
const tmdbApiKey: string = process.env.TMDB_API_KEY as string;

export const tmdbBaseEndpoint = (endpoints: string, params?: any): string => {
	const queryParams = new URLSearchParams(params);
	return `${tmdbBaseUrl}${endpoints}?api_key=${tmdbApiKey}&${queryParams}`;
};