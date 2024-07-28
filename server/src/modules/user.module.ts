import mongoose from "mongoose";

import { schemeOptions } from "../configs/scheme.config";

import type { IUserScheme } from "../types/db.type";

export default mongoose.model<IUserScheme>(
	"users",
	new mongoose.Schema<IUserScheme>({
		username: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		avatar: {
			type: String,
			required: false,
			default: "",
		},
		poster: {
			type: String,
			required: false,
			default: "",
		},
	}, schemeOptions),
);