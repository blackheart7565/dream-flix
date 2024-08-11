import type { CreateAxiosDefaults } from "axios";
import queryString from "query-string";

const PORT: number = 8080;
export const BASE_URL_SERVER: string = `http://localhost:${PORT}/api/v1`;

export const clientConfig: CreateAxiosDefaults = {
	withCredentials: true,
	baseURL: BASE_URL_SERVER,
	paramsSerializer: {
		encode: (params): string => queryString.stringify(params),
	},
	headers: {
		"Content-Type": "application/json",
	}
};