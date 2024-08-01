import React from "react";
import { Routes, useLocation } from "react-router-dom";

import { displayRoutes } from "../../utils/displayRoutes";
import { pageRoutes } from "../../utils/pageRoutes";

import type { Location as LocationRoutes } from "react-router-dom";

interface IRootRoutesProps { }

export const RootRoutes: React.FC<IRootRoutesProps> = (): JSX.Element => {
	const location: LocationRoutes = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			{displayRoutes(pageRoutes)}
		</Routes>
	);
};