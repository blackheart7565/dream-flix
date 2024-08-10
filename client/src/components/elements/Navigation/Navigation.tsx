import React from "react";
import { Location as LocationRoutes, useLocation } from "react-router-dom";

import { NavigationItem } from "./NavigationItem";
import { useLang } from "../../../hooks/useLang";
import { getNavigation } from "../../../utils/navigation";

import type { INavigation } from "../../../types/navigation";

import "./Navigation.scss";

interface INavigationProps { }

export const Navigation: React.FC<INavigationProps> = (): JSX.Element => {
	const location: LocationRoutes = useLocation();
	const { langType, translation } = useLang();
	const navigation: INavigation[] = getNavigation(langType, translation);

	return (
		<nav className={
			`
				w-max
				h-auto
				lg:block
				hidden
			`
		}>
			<ul className={
				`
					flex
					items-center
					w-full
					h-full
					gap-5
				`
			}>
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