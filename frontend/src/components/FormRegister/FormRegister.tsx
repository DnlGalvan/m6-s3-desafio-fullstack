import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const FormRegister = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			name: data.get("name"),
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
			<TextField
				margin="normal"
				required
				fullWidth
				id="name"
				label="Nome completo"
				name="name"
				autoComplete="name"
				autoFocus
			/>
			<TextField
				margin="normal"
				required
				fullWidth
				name="email"
				label="Email"
				type="email"
				id="email"
				autoComplete="email"
			/>
			<TextField
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
			/>
			<TextField
				margin="normal"
				required
				fullWidth
				name="confirm-password"
				label="Confirme o password"
				type="password"
				id="confirm-password"
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
			>
				Login
			</Button>
			<Grid item>
				<Link
					to="/login"
					style={{
						textDecoration: "none",
						color: "rgba(0, 0, 0, 0.6)",
					}}
				>
					Já possui cadastro? Efetue o{" "}
					<b style={{ textDecoration: "underline" }}>Login aqui!</b>
				</Link>
			</Grid>
		</Box>
	);
};

export default FormRegister;
