import express from "express";

import AuthController from "../controller/AuthController";

import { authMiddleware } from "../middleware/auth.middleware";

const authRouter = express.Router();

authRouter.post(
	"/registration",
	AuthController.registration
);

authRouter.post(
	"/login",
	AuthController.login
);

authRouter.post("/logout", authMiddleware, AuthController.logout);
authRouter.get("/refresh", );

authRouter.put(
	"/update",
);

authRouter.delete(
	"/delete",
);

export default authRouter;