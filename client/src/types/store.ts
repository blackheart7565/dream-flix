import store from "../store/store";
import { AllowedLangs } from "../constants/lang";

export type TStateStore = ReturnType<typeof store.getState>;

export type TDispatchType = typeof store.dispatch;

export interface IInitialStateLang {
	lang: AllowedLangs;
}

export interface IInitialStateUserDropDown {
	submenu: {
		lang: {
			selectedItemId: number,
		};
	};
}