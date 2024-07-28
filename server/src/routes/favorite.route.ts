import express from "express";
import { body, param } from "express-validator";

import FavoriteController from "../controller/FavoriteController";
import requestException from "../exceptions/request.exception";

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
	body("userId")
		.exists().withMessage("The field \"userId\" is required!")
		.notEmpty().withMessage("The field \"userId\" cannot be empty.!"),
	body("mediaId")
		.exists().withMessage("The field \"mediaId\" is required!")
		.notEmpty().withMessage("The field \"mediaId\" cannot be empty!"),
	body("mediaType")
		.exists().withMessage("The field \"mediaType\" is required!")
		.notEmpty().withMessage("The field \"mediaType\" cannot be empty!"),
	body("mediaPosterPath")
		.exists().withMessage("The field \"mediaPosterPath\" is required!")
		.notEmpty().withMessage("The field \"mediaPosterPath\" cannot be empty!"),
	body("mediaTitle")
		.exists().withMessage("The field \"mediaTitle\" is required!")
		.notEmpty().withMessage("The field \"mediaTitle\" cannot be empty!"),
	requestException.validateRouter,
	FavoriteController.create
);

favoriteRoute.delete(
	"/:favoriteId",
	authMiddleware,
	param("favoriteId")
		.exists().withMessage("The field \"mediaTitle\" is required!")
		.notEmpty().withMessage("The field \"mediaTitle\" cannot be empty!"),
	requestException.validateRouter,
	FavoriteController.delete
);

favoriteRoute.delete(
	"/",
	authMiddleware,
	FavoriteController.deleteAll
);

export default favoriteRoute;