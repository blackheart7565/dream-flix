

export const mediaConfig = {
	category: {
		// Get a list of movies ordered by popularity.
		popular: "popular",

		// Get a list of movies ordered by rating.
		top_rated: "top_rated",

		// Get a list of movies that are currently in theatres.
		// ( Получите список фильмов, которые сейчас идут в кинотеатрах. )
		now_playing_movie: "now_playing",

		// Get a list of TV shows airing today.
		// ( Получите список телешоу, которые выходят в эфир сегодня. )
		airing_today_tv: "airing_today",
	},
	types: {
		movie: "movie",
		tv: "tv",
		films: "films",
		serials: "serials",
	},
	poster_path: (imgEndpoint: string | undefined): string => `https://image.tmdb.org/t/p/original${imgEndpoint}`,
	backdrop_path: (imgEndpoint: string | undefined): string => `https://image.tmdb.org/t/p/w5${imgEndpoint}`,
	youtube_path: (imgEndpoint: string | undefined): string => `https://www.youtube.com/embed/${imgEndpoint}`,
} as const;