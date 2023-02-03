import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../interfaces/IPost";
import { IUser, IUserLogin } from "../interfaces/IUser";
import { IUserContext } from "../interfaces/IUserContext";
import { IUserProvider } from "../interfaces/IUserProvider";
import api from "../service/api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ClientsContext } from "./ClientsContext";

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
	const [login, setLogin] = useState(false);
	const [user, setUser] = useState<IUser>({} as IUser);
	const { getClients } = useContext(ClientsContext);

	const navigate = useNavigate();

	const token = localStorage.getItem("@cadastro-clientes:token");

	useEffect(() => {
		if (token) {
			setUser(
				JSON.parse(localStorage.getItem("@cadastro-clientes:user")!)
			);
			setLogin(true);
		} else {
		}
	}, []);

	const SignIn = async (data: IUserLogin) => {
		console.log(data);

		try {
			const res = await api.post<IPost>("/login/users", data);
			console.log(res);
			const { user: userResponse } = res.data;
			const token = JSON.stringify(res.data.token)?.replace(/"/gi, "");
			setUser(userResponse);

			localStorage.setItem(
				"@cadastro-clientes:user",
				JSON.stringify(userResponse)
			);
			localStorage.setItem(
				"@cadastro-clientes:userId",
				JSON.stringify(res.data.user.id)
			);
			localStorage.setItem("@cadastro-clientes:token", token);

			setLogin(true);
			getClients();

			navigate("/dashboard");

			toast.success("Login efetuado com sucesso!");
		} catch (error) {
			const err = error as AxiosError;
			console.log(err);
			toast.error("Erro ao efetuar Login!");
		} finally {
		}
	};

	const Logout = () => {
		setLogin(false);
		localStorage.removeItem("@cadastro-clientes:token");
		localStorage.removeItem("@cadastro-clientes:userId");
		localStorage.removeItem("@cadastro-clientes:user");
		navigate("/");
	};

	return (
		<UserContext.Provider
			value={{
				login,
				setLogin,
				user,
				SignIn,
				Logout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
