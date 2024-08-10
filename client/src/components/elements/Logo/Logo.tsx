import React from "react";
import { Link } from "react-router-dom";

import { pageRoutesEndpoints } from "../../../endpoints/pageRoutesEndpoints";

import "./Logo.scss";
import classNames from "classnames";

interface ILogoProps { }

export const Logo: React.FC<ILogoProps> = (): JSX.Element => {
	return (
		<Link
			to={pageRoutesEndpoints.home}
			className={classNames(
				"logo",
				`
					flex
					justify-center
					items-center
					gap-2
					w-max
					h-auto
				`
			)}
		>
			<div className={
				`
					w-[50px]
					h-[50px]
					ld:w-[60px]
					ld:h-[60px]
				`
			}>
				<img
					src="logo.png"
					alt="logo"
					className={
						`
							w-full
							h-full
							object-cover
						`
					}
				/>
			</div>
			<span className={classNames(
				"text",
				`
					uppercase
					text-[1.8rem]
					font-medium
					tracking-[0.1rem]
					lg:leading-8
					leading-6
				`
			)}>DreamFlix</span>
		</Link>
	);
};