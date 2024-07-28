export { };

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DATABASE_URL: string;
			PORT: string;
			BASE_URL_CLIENT: string;

			TOKEN_ACCESS_SECRET: string;
			TOKEN_REFRESH_SECRET: string;

			TMDB_BASE_URL: string;
			TMDB_API_KEY: string;
			TMDB_API_TOKEN: string;
		}
	}
}