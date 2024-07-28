import axios from "axios";

export const getTmdbAxios = async <T>(url: string): Promise<T> => {
	const { data } = await axios.get(url);
	return data;
};