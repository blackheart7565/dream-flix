import { MainLayout, BaseLayout} from "../components/layouts";
import { pageRoutesEndpoints } from "../endpoints/pageRoutesEndpoints";
import {
	Home,
	Films,
	Serials,
	Details,
	PageNotFound
} from "../components/pages";

import type { ILayoutPaths } from "../types/layout";

export const pageRoutes: ILayoutPaths[] = [
	{
		id: 1,
		path: pageRoutesEndpoints.home,
		element: <MainLayout />,
		children: [
			{
				id: 1,
				path: "",
				index: true,
				element: <Home />,
			},
			{
				id: 2,
				path: pageRoutesEndpoints.movie,
				index: false,
				element: <BaseLayout />,
				children: [
					{
						id: 1,
						path: "",
						index: true,
						element: <Films />,
					},
					{
						id: 2,
						path: pageRoutesEndpoints.details,
						index: false,
						element: <Details />,
					},
				]
			},
			{
				id: 3,
				path: pageRoutesEndpoints.serials,
				index: false,
				element: <BaseLayout />,
				children: [
					{
						id: 1,
						path: "",
						index: true,
						element: <Serials />,
					},
					{
						id: 2,
						path: pageRoutesEndpoints.details,
						index: false,
						element: <Details />
					}
				]
			},
		]
	},
	{
		id: 2,
		path: pageRoutesEndpoints.pageNotFound,
		index: false,
		element: <PageNotFound />,
	},
];