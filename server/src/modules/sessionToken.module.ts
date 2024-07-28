import mongoose from "mongoose";

import { schemeOptions } from "../configs/scheme.config";

import type { ISessionToken } from "../types/db.type";

export default mongoose.model<ISessionToken>(
	"session-token",
	new mongoose.Schema<ISessionToken>({
		userId: {
			type: mongoose.Types.ObjectId,
			required: true,
			res: "users",
		},
		refresh_token: {
			type: String,
			required: true,
		},
		finger_print: {
			type: String,
			required: true,
		},
	}, schemeOptions),
);