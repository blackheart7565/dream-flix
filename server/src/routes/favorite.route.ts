import express from "express";

const favoriteRoute = express.Router();

favoriteRoute.get(
	"/",
);

favoriteRoute.post(
	"/add",
);

favoriteRoute.delete(
	"/:favoriteId",
);

favoriteRoute.delete(
	"/",
);

export default favoriteRoute;