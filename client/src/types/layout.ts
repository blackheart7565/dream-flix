export interface ILayoutPaths {
	id: number;
	path: string;
	index?: boolean;
	element: React.ReactNode;
	children?: ILayoutPaths[] | undefined;
}