import { type ReactNode } from "react";

export interface INavigation {
	id: number;
	path: string;
	title: string;
}

export interface INavigationBurgerMenu extends INavigation {
	icon?: ReactNode;
}