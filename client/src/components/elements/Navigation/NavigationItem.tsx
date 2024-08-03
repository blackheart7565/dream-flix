import React, { HTMLAttributes } from "react";
import classNames from "classnames";

import style from "./Navigation.module.scss";

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
		<li className={classNames(style.navigationItem,
			isActive && style.active
		)}>
			<a href={path} className={style.navigationLink}>
				{children}
			</a>
		</li>
	);
};