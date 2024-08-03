import { FiSettings } from "react-icons/fi";
import { FiTv } from "react-icons/fi";
import { BiMovie } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

import { pageRoutesEndpoints } from "../endpoints/pageRoutesEndpoints";

import type { INavigation, INavigationBurgerMenu } from "../types/navigation";

export const navigation: INavigation[] = [
	{
		id: 1,
		path: pageRoutesEndpoints.home,
		select: pageRoutesEndpoints.home,
		title: "Home",
	},
	{
		id: 2,
		path: pageRoutesEndpoints.movie,
		select: `/${pageRoutesEndpoints.movie}`,
		title: "Films",
	},
	{
		id: 3,
		path: pageRoutesEndpoints.serials,
		select: `/${pageRoutesEndpoints.serials}`,
		title: "Serials",
	},
];

export const navigationBurgerMenu: INavigationBurgerMenu[] = [
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