import { IUser, IUserLogin } from "./IUser";

export interface IUserContext {
	user: IUser;
	SignIn: (data: IUserLogin) => void;
	Logout: () => void;
	login: boolean;
	setLogin: (state: boolean) => void;
}
