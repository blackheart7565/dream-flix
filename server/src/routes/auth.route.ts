import express from "express";

const authRouter = express.Router();

authRouter.post(
	"/registration",
);

authRouter.post(
	"/login",
);

authRouter.post("/logout", );
authRouter.get("/refresh", );

authRouter.put(
	"/update",
);

authRouter.delete(
	"/delete",
);

export default authRouter;