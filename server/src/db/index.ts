import mongoose from "mongoose";

/**
 * @param callback вызовется после успешного подключения к базе данных
 */
export const dbConnection = (callback?: () => void): void => {
	const connectString: string = process.env.DATABASE_URL as string;

	mongoose.connect(connectString)
		.then(() => {
			console.log("Connection to Mongo Database");

			if (callback) callback();
		})
		.catch(console.error);
};