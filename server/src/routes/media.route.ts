import express from "express";
import { param, query } from "express-validator";

import MediaController from "../controller/MediaController";
import requestException from "../exceptions/request.exception";

const mediaRoute = express.Router({ mergeParams: true });

mediaRoute.get(
	"/list/:mediaCategory",
	param("mediaType")
		.exists().withMessage("The field \"mediaType\" is required!")
		.notEmpty().withMessage("The field \"mediaType\" cannot be empty!"),
	param("mediaCategory")
		.exists().withMessage("The field \"mediaCategory\" is required!")
		.notEmpty().withMessage("The field \"mediaCategory\" cannot be empty!"),
	query("page")
		.exists().withMessage("The field \"page\" is required!")
		.notEmpty().withMessage("The field \"page\" cannot be empty!")
		.isLength({ min: 1 }).withMessage("Enter the page number (must be at least 1)!")
		.isInt({ gt: 0 }).withMessage('Page number must be a positive integer!'),
	requestException.validateRouter,
	MediaController.mediaList
);

mediaRoute.get(
	"/details/:mediaId",
	param("mediaType")
		.exists().withMessage("The field \"mediaType\" is required!")
		.notEmpty().withMessage("The field \"mediaType\" cannot be empty!"),
	param("mediaId")
		.exists().withMessage("The field \"mediaId\" is required!")
		.notEmpty().withMessage("The field \"mediaId\" cannot be empty!")
		.isLength({ min: 1 }).withMessage("Enter the media id number (must be at least 1)!")
		.isInt({ gt: 0 }).withMessage('MediaId number must be a positive integer!'),
	requestException.validateRouter,
	MediaController.mediaDetails
);

mediaRoute.get(
	"/genre/list",
	param("mediaType")
		.exists().withMessage("The field \"mediaType\" is required!")
		.notEmpty().withMessage("The field \"mediaType\" cannot be empty!"),
	requestException.validateRouter,
	MediaController.mediaGenre
);

mediaRoute.get(
	"/search",
	param("mediaType")
		.exists().withMessage("The field \"mediaType\" is required!")
		.notEmpty().withMessage("The field \"mediaType\" cannot be empty!"),
	query("mediaQuery")
		.exists().withMessage("The field \"mediaQuery\" is required!")
		.notEmpty().withMessage("The field \"mediaQuery\" cannot be empty!"),
	query("page")
		.exists().withMessage("The field \"page\" is required!")
		.notEmpty().withMessage("The field \"page\" cannot be empty!")
		.isLength({ min: 1 }).withMessage("Enter the page number (must be at least 1)!")
		.isInt({ gt: 0 }).withMessage('Page number must be a positive integer!'),
	requestException.validateRouter,
	MediaController.mediaSearch
);

export default mediaRoute;