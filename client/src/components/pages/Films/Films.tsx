import React from "react";

import "./Films.module.scss";

interface IFilmsProps { }

export const Films: React.FC<IFilmsProps> = (): JSX.Element => {
	return (
		<div className="films">
			Films
		</div>
	);
};