import store from "../store/store";
import { ILocalStorageLang } from "./localStorage";

export type TStateStore = ReturnType<typeof store.getState>;

export type TDispatchType = typeof store.dispatch;

export interface IInitialStateLang {
	lang: ILocalStorageLang;
}

export interface IInitialStateUserDropDown {
	submenu: {
		lang: {
			selectedItemId: number,
		};
	};
}