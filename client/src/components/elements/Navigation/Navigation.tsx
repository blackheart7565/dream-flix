import React from "react";
import { Location as LocationRoutes, useLocation } from "react-router-dom";

import { NavigationItem } from "./NavigationItem";
import { useLang } from "../../../hooks/useLang";

import type { INavigation } from "../../../types/navigation";

import style from "./Navigation.module.scss";
import { getNavigation } from "../../../utils/navigation";

interface INavigationProps { }

export const Navigation: React.FC<INavigationProps> = (): JSX.Element => {
	const location: LocationRoutes = useLocation();
	const { langType, translation } = useLang();
	const navigation: INavigation[] = getNavigation(langType, translation);

	return (
		<nav className={style.navigation}>
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