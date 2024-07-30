import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { BaseLayout } from "./BaseLayout";

import type { Location as LocationRoutes } from "react-router-dom";

interface IRootRoutesProps { }

export const RootRoutes: React.FC<IRootRoutesProps> = (): JSX.Element => {
	const location: LocationRoutes = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route path="/" element={<BaseLayout />}>
				
			</Route>
		</Routes>
	);
};