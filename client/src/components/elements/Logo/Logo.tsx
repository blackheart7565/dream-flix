import React from "react";
import { Link } from "react-router-dom";

import { pageRoutesEndpoints } from "../../../endpoints/pageRoutesEndpoints";

import style from "./Logo.module.scss";

interface ILogoProps { }

export const Logo: React.FC<ILogoProps> = (): JSX.Element => {
	return (
		<Link
			to={pageRoutesEndpoints.home}
			className={style.logo}
		>
			<div className={style.image}>
				<img src="logo.png" alt="logo" />
			</div>
			<span className={style.text}>DreamFlix</span>
		</Link>
	);
};