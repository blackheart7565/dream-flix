import React from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

import styleGlobalUI from "../../../styles/global.module.scss";
import style from "./ButtonFavorite.module.scss";
import classNames from "classnames";

interface IButtonFavoriteProps {
	path?: string;
}

export const ButtonFavorite: React.FC<IButtonFavoriteProps> = ({
	path,
}): JSX.Element => {
	return (
		<Link
			to={path || ""}
			className={classNames(styleGlobalUI.btnIcon, style.btnFavorite)}>
			<MdFavorite className={styleGlobalUI.icon} />
		</Link>
	);
};