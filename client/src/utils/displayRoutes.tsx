import { Route } from "react-router-dom";

import type { ILayoutPaths } from "../types/layout";

export const displayRoutes = (routers: ILayoutPaths[]): JSX.Element => {
	return (
		<>
			{routers.map((item: ILayoutPaths) => (
				<Route
					key={item.id}
					element={item.element}
					path={item.path}
				>
					{item.children
						&& item.children.length > 0
						&& displayRoutes(item.children)}
				</Route>
			))}
		</>
	);
};