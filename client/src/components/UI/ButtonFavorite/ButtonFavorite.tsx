import React from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

import styleGlobalUI from "../globalUI.module.scss";
import style from "./ButtonFavorite.module.scss";

interface IButtonFavoriteProps {
	path?: string;
}

export const ButtonFavorite: React.FC<IButtonFavoriteProps> = ({
	path,
}): JSX.Element => {
	return (
		<Link
			to={path || ""}
			className={`${style.btnFavorite} ${styleGlobalUI.btnGroup}`}>
			<MdFavorite className={styleGlobalUI.icon} />
		</Link>
	);
};