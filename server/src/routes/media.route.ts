import express from "express";

const mediaRoute = express.Router({ mergeParams: true });

mediaRoute.get(
	"/list/:mediaCategory",
);

mediaRoute.get(
	"/details/:mediaId",
);

mediaRoute.get(
	"/genre/list",
);

mediaRoute.get(
	"/search",
);

export default mediaRoute;