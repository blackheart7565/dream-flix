import type { IDtoUser } from "../types/user.type";
import type { IObjectIdType } from "../types/db.type";

interface IUserDto { }
interface IConstructorProps extends IDtoUser { }

export class UserDto implements IUserDto {
	public id: IObjectIdType;
	public username: string;
	public email: string;
	public avatar: string;
	public poster: string;

	constructor({ id, username, email, avatar, poster }: IConstructorProps) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.avatar = avatar;
		this.poster = poster;
	}
}