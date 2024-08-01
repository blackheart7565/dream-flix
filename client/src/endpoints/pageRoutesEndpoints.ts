import type { IPageRoutesEndpoints } from "../types/endpoints";

export const pageRoutesEndpoints: IPageRoutesEndpoints = {
	home: "/",
	movie: "movie",
	serials: "serials",
	details: ":mediaType/:mediaId",
	pageNotFound: "*",
	settings: "settings",
};