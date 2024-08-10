import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styleGlobalUI from "../../../styles/global.module.scss";
import style from "./ButtonBurgerMenu.module.scss";

interface IButtonBurgerMenuProps { }

export const ButtonBurgerMenu: React.FC<IButtonBurgerMenuProps> = (): JSX.Element => {
	return (
		<Link
			to={""}
			className={classNames(styleGlobalUI.btnIcon, style.btnBurgerMenu)}>
			<span></span>
		</Link>
	);
};