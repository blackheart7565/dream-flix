
// export type TUserMenuAction = "theme" | "language" | "logout";

import { ReactNode } from "react";

export interface IUserDropDownSubmenu {
	id: number;
	type: string;
	title: string;
}

export interface IUserDropDown {
	id: number;
	path: string;
	title: string;
	icon: ReactNode;
	submenu: IUserDropDownSubmenu[];
	action?: string;
}

export interface IUserDropDownActions {
	theme: string;
	language: string;
	logout: string;
}

export interface IUserDropDownHandleActions {
	[key: string]: (type: string) => void;
}

