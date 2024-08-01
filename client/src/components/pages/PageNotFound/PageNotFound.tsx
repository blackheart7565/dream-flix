import React from "react";

import "./PageNotFound.module.scss";

interface IPageNotFoundProps { }

export const PageNotFound: React.FC<IPageNotFoundProps> = (): JSX.Element => {
	return (
		<div className="pagenotfound">
			PageNotFound
		</div>
	)
}