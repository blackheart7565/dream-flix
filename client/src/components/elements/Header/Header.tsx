import React from "react";
import classNames from "classnames";

import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import {
	ButtonTheme,
	ButtonFavorite,
	ButtonBurgerMenu,
	ProfileDropDown,
} from "../../UI";

import "./Header.scss";

interface IHeaderProps { }

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
	return (
		<header className={
			`
				fixed
				top-0
				left-0
				z-[1000]
				w-full
				h-[65px]
				shadow-[0px_0px_3px_#fdfdfd]
				bg-black
				bg-opacity-10
				backdrop-blur-[5px]
			`
		}>
			<div className={classNames(
				"container",
				`
					flex
					items-center
					justify-between
					h-full
				`
			)}>
				<Logo />
				<Navigation />
				<div className={
					`
						hidden
						lg:flex
						justify-center
						items-center
						gap-6
					`
				}>
					<ButtonFavorite />
					<ButtonTheme id={"btn-theme"} />
					<ProfileDropDown />
				</div>
				<ButtonBurgerMenu />
			</div>
		</header>
	);
};