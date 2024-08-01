import React from "react";

import "./Details.module.scss";

interface IDetailsProps { }

export const Details: React.FC<IDetailsProps> = (): JSX.Element => {
	return (
		<div className="details">
			Details
		</div>
	)
}