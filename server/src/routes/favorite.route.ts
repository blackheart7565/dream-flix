import express from "express";

import FavoriteController from "../controller/FavoriteController";

import { authMiddleware } from "../middleware/auth.middleware";

const favoriteRoute = express.Router();

favoriteRoute.get(
	"/",
	authMiddleware,
	FavoriteController.getAll
);

favoriteRoute.post(
	"/add",
	authMiddleware,
	FavoriteController.create
);

favoriteRoute.delete(
	"/:favoriteId",
);

favoriteRoute.delete(
	"/",
);

export default favoriteRoute;