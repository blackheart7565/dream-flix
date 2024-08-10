import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import "./ButtonBurgerMenu.scss";

interface IButtonBurgerMenuProps { }

export const ButtonBurgerMenu: React.FC<IButtonBurgerMenuProps> = (): JSX.Element => {
	return (
		<Link
			to={""}
			className={classNames(
				"btnIcon",
				"btnBurgerMenu",
				`
					cursor-pointer 
					lg:hidden 
					flex 
					justify-center 
					items-center 
					w-10 
					h-10 
					relative 
					bg-transparent 
					border-none
				`,
			)}>
			<span className={
				`
					absolute 
					top-1/2 
					left-1/2 
					translate-x-[-50%] 
					translate-y-[-50%] 
					h-[3px] 
					bg-white 
					transition-width 
					duration-300 
					ease-in-out 
					rounded-[50px]
				`
			} />
		</Link>
	);
};