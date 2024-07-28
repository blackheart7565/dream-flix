import express from "express";
import { body } from "express-validator";

import AuthController from "../controller/AuthController";
import requestException from "../exceptions/request.exception";

import { authMiddleware } from "../middleware/auth.middleware";

const authRouter = express.Router();

authRouter.post(
	"/registration",
	body("username")
		.exists().withMessage("The field \"username\" is required!")
		.notEmpty().withMessage("The field \"username\" cannot be empty.!"),
	body("email")
		.exists().withMessage("The field \"email\" is required!")
		.notEmpty().withMessage("The field \"email\" cannot be empty!")
		.isEmail().withMessage("Please enter a valid email address!"),
	body("password")
		.exists().withMessage("The field \"password\" is required!")
		.notEmpty().withMessage("The field \"password\" cannot be empty!")
		.isLength({
			min: 3,
		}).withMessage("The password must contain at least 3 characters!"),
	requestException.validateRouter,
	AuthController.registration
);

authRouter.post(
	"/login",
	body("email")
		.exists().withMessage("The field \"email\" is required!")
		.notEmpty().withMessage("The field \"email\" cannot be empty!")
		.isEmail().withMessage("Please enter a valid email address!"),
	body("password")
		.exists().withMessage("The field \"password\" is required!")
		.notEmpty().withMessage("The field \"password\" cannot be empty!")
		.isLength({
			min: 3,
		}).withMessage("The password must contain at least 3 characters!"),
	requestException.validateRouter,
	AuthController.login
);

authRouter.post("/logout", authMiddleware, AuthController.logout);
authRouter.get("/refresh", AuthController.refresh);

authRouter.put(
	"/update",
	authMiddleware,
	body("email")
		.exists().withMessage("The field \"email\" is required!")
		.notEmpty().withMessage("The field \"email\" cannot be empty!")
		.isEmail().withMessage("Please enter a valid email address!"),
	requestException.validateRouter,
	AuthController.updateUserData
);

authRouter.delete(
	"/delete",
	authMiddleware,
	body("email")
		.exists().withMessage("The field \"email\" is required!")
		.notEmpty().withMessage("The field \"email\" cannot be empty!")
		.isEmail().withMessage("Please enter a valid email address!"),
	requestException.validateRouter,
	AuthController.deleteUser
);

export default authRouter;