import axios, { type AxiosInstance } from "axios";

import publicAxios from "./publicClient";
import { clientConfig } from "../config/clientConfig";

import type { IAuthResponse } from "../../types/response/auth";

export const privateAxios: AxiosInstance = axios.create({
	...clientConfig
});

privateAxios.interceptors.request.use(config => {
	config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
	return config;
});

privateAxios.interceptors.response.use((config) => {
	return config;
}, async (err) => {
	// Сохроаняем основной запрос
	const originalRequest = err.config;

	if (err.response.status == 401 && err.config && !err.config._isRetry) {
		originalRequest._isRetry = true;
		try {
			// Производим запрос на получение accessToken-a для обновления
			const response = await publicAxios.get<IAuthResponse>("auth/refresh");

			// Сохраняем токен в локальном хранилище
			localStorage.setItem("token", response.data.accessToken);

			// И заново производим запрос
			return privateAxios.request(originalRequest);
		} catch {
			console.log('Не Авторизован');
		}
	}
	throw err;
});

export default privateAxios;