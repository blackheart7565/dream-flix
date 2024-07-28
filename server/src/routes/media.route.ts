import express from "express";

import MediaController from "../controller/MediaController";

const mediaRoute = express.Router({ mergeParams: true });

mediaRoute.get(
	"/list/:mediaCategory",
	MediaController.mediaList
);

mediaRoute.get(
	"/details/:mediaId",
	MediaController.mediaDetails
);

mediaRoute.get(
	"/genre/list",
	MediaController.mediaGenre
);

mediaRoute.get(
	"/search",
);

export default mediaRoute;