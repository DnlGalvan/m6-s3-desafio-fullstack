import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import ClientsProvider from "./context/ClientsContext";
import UserProvider from "./context/UserContext";
import AllRoutes from "./routes/routes";
import { LightTheme } from "./styles/Light";

function App() {
	return (
		<ClientsProvider>
			<UserProvider>
				<ThemeProvider theme={LightTheme}>
					<Container
						component="main"
						maxWidth="xl"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<CssBaseline />
						<AllRoutes />
						<Toaster
							position="bottom-right"
							toastOptions={{
								style: {
									padding: "20px",
								},
							}}
						/>
					</Container>
				</ThemeProvider>
			</UserProvider>
		</ClientsProvider>
	);
}

export default App;
