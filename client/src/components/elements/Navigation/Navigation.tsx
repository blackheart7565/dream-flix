import React from "react";
import { Location as LocationRoutes, useLocation } from "react-router-dom";

import { NavigationItem } from "./NavigationItem";
import { navigation } from "../../../utils/navigation";

import type { INavigation } from "../../../types/navigation";

import style from "./Navigation.module.scss";

interface INavigationProps { }

export const Navigation: React.FC<INavigationProps> = (): JSX.Element => {
	const location: LocationRoutes = useLocation();

	const rootClassName: string[] = [
		style.navigation,
		// style.burger
	]

	return (
		<nav className={rootClassName.join(" ")}>
			<ul className={style.navigationList}>
				{navigation.map((nav: INavigation): JSX.Element => (
					<NavigationItem
						key={nav.id}
						path={nav.path}
						isActive={location.pathname === nav.select}
					>
						{nav.title}
					</NavigationItem>
				))}
			</ul>
		</nav>
	);
};