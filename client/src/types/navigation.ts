import { type ReactNode } from "react";

export interface INavigation {
	id: number;
	path: string;
	title: string;
	select?: string;
}

export interface INavigationBurgerMenu extends INavigation {
	icon?: ReactNode;
}