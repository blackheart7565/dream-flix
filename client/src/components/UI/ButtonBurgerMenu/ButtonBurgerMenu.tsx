import React from "react";
import { Link } from "react-router-dom";

import styleGlobalUI from "../globalUI.module.scss";
import style from "./ButtonBurgerMenu.module.scss";

interface IButtonBurgerMenuProps { }

export const ButtonBurgerMenu: React.FC<IButtonBurgerMenuProps> = (): JSX.Element => {
	return (
		<Link
			to={""}
			className={`${styleGlobalUI.btnGroup} ${style.btnBurgerMenu}`}>
			<span></span>
		</Link>
	);
};