import React, { HTMLAttributes } from "react";
import classNames from "classnames";

import "./Navigation.scss";

interface INavigationItemProps extends HTMLAttributes<HTMLAnchorElement> {
	path: string;
	isActive: boolean;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({
	path,
	children,
	isActive,
}): JSX.Element => {
	return (
		<li className={classNames(
			"navItem",
			`
				inline-block
				overflow-hidden
			`,
			isActive && "active"
		)}>
			<a href={path} className={classNames(
				"navLink",
				`
					block
					text-[1.3rem]
					font-medium
					relative
					leading-[3rem]					
				`
			)}>
				{children}
			</a>
		</li>
	);
};