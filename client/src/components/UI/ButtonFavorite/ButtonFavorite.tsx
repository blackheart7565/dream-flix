import React from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import classNames from "classnames";

import "./ButtonFavorite.scss";

interface IButtonFavoriteProps {
	path?: string;
}

export const ButtonFavorite: React.FC<IButtonFavoriteProps> = ({
	path,
}): JSX.Element => {
	return (
		<Link
			to={path || ""}
			className={classNames(
				"btnIcon",
				"btnFavorite",
				`
					cursor-pointer 
					flex 
					justify-center 
					items-center 					
					hover:scale-[1.2]
					hover:text-[#FF0000]
				`
			)}>
			<MdFavorite className={"icon"} />
		</Link>
	);
};