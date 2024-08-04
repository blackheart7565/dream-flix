import { BiExit } from "react-icons/bi"; 
import { MdLanguage } from "react-icons/md"; 
import { AiFillSetting } from "react-icons/ai"; 
import { FaUserCircle } from "react-icons/fa";
import type {
	IUserDropDownHandleActions,
	IUserDropDown as IUserDropDownData,
	IUserDropDownActions,
} from "../types/userDropDown";


export const userDropDownActions: IUserDropDownActions = {
	theme: "theme",
	language: "language",
	logout: "logout",
};

export const userDropDownData: IUserDropDownData[] = [
	{
		id: 1,
		path: "/profile",
		title: "Profile",
		icon: <FaUserCircle />,
		submenu: []
	},
	{
		id: 2,
		path: "/settings",
		title: "Settings",
		icon: <AiFillSetting />,
		submenu: []
	},
	{
		id: 3,
		path: "",
		title: "Change language",
		action: userDropDownActions.language,
		icon: <MdLanguage />,
		submenu: [
			{
				id: 1,
				type: "en",
				title: "English",
			},
			{
				id: 2,
				type: "rus",
				title: "Russian",
			},
		]
	},
	{
		id: 4,
		path: "",
		title: "Exit",
		action: userDropDownActions.logout,
		icon: <BiExit />,
		submenu: [],
	}
];



export const actionHandlers: IUserDropDownHandleActions = {
	language: (type: string): void => {
		console.log(type);
	},
	theme: (type: string): void => {
		console.log(type);
	},
	logout: (): void => {
		console.log("Logout account succuss");
	}
};
