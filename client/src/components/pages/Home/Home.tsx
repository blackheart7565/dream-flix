import React from "react";

import "./Home.module.scss";

interface IHomeProps { }

export const Home: React.FC<IHomeProps> = (): JSX.Element => {
	return (
		<div className="home">
			Home
		</div>
	);
};