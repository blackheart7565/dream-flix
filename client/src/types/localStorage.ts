import { AllowedLangs } from "../constants/lang";

export interface ILocalStorageLang {
	type: AllowedLangs,
	name: string;
}