import axios, { type AxiosInstance } from "axios";
import { clientConfig } from "../config/clientConfig";

const publicAxios: AxiosInstance = axios.create({
	...clientConfig
});

export default publicAxios;