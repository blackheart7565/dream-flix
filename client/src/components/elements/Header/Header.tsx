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

import style from "./Header.module.scss";

interface IHeaderProps { }

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
	return (
		<header className={style.header}>
			<div className={classNames("container", style.headerInner)}>
				<Logo />
				<Navigation />
				<div className={style.btnGroup}>
					<ButtonFavorite />
					<ButtonTheme id={"btn-theme"} />
					<ProfileDropDown />
				</div>
				<ButtonBurgerMenu />
			</div>
		</header>
	);
};