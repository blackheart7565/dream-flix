import { FiSettings } from "react-icons/fi";
import { FiTv } from "react-icons/fi";
import { BiMovie } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

import { pageRoutesEndpoints } from "../endpoints/pageRoutesEndpoints";

import type { INavigation, INavigationBurgerMenu } from "../types/navigation";
import type { TTranslation } from "../types/lang";
import { AllowedLangs } from "../constants/lang";

export const getNavigation = (lang: AllowedLangs, translation: TTranslation): INavigation[] => {
	return [
		{
			id: 1,
			path: pageRoutesEndpoints.home,
			select: pageRoutesEndpoints.home,
			title: translation[lang].header.navigation.home,
		},
		{
			id: 2,
			path: pageRoutesEndpoints.movie,
			select: `/${pageRoutesEndpoints.movie}`,
			title: translation[lang].header.navigation.movie,
		},
		{
			id: 3,
			path: pageRoutesEndpoints.serials,
			select: `/${pageRoutesEndpoints.serials}`,
			title: translation[lang].header.navigation.serials,
		},
	];
};

export const getNavigationBurgerMenu = (): INavigationBurgerMenu[] => {
	return [
		{
			id: 1,
			path: pageRoutesEndpoints.home,
			title: "Home",
			icon: <AiFillHome />,
		},
		{
			id: 2,
			path: pageRoutesEndpoints.movie,
			title: "Films",
			icon: <BiMovie />,
		},
		{
			id: 3,
			path: pageRoutesEndpoints.serials,
			title: "Serials",
			icon: <FiTv />,
		},
		{
			id: 4,
			path: pageRoutesEndpoints.settings,
			title: "Settings",
			icon: <FiSettings />,
		}
	];
};