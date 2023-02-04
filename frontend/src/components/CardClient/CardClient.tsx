import { useContext } from "react";
import { ClientsContext } from "../../context/ClientsContext";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Modal } from "@mui/material";
import { IClientProps } from "../../interfaces/IClientProps";
import FormRegisterContact from "../FormRegisterContact/FormRegisterContact";
import DialogContent from "@mui/material/DialogContent";
import CardContact from "../CardContact/CardContact";

const CardClient = ({ client }: IClientProps) => {
	const {
		getClientById,
		DeleteClient,
		openModalRegisterContact,
		handleOpenModalRegisterContact,
		handleCloseModalRegisterContact,
	} = useContext(ClientsContext);

	const { id, name, email, phone_number, contacts } = client!;

	return (
		<Grid item xs={2} sm={4} md={4} maxWidth="100%">
			<Card
				sx={{
					minWidth: 250,
					transition: ".6s",
					"&:hover": { scale: "1.2" },
				}}
			>
				<CardContent
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Grid>
						<Typography variant="h5" component="div">
							{name}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{email}
						</Typography>
						<Typography variant="body2">{phone_number}</Typography>
					</Grid>
					<Grid>
						<IconButton
							aria-label="edit"
							size="small"
							onClick={() => getClientById(client!.id)}
						>
							<EditIcon fontSize="inherit" />
						</IconButton>
						<IconButton
							aria-label="delete"
							size="small"
							onClick={() => DeleteClient(id)}
						>
							<DeleteIcon fontSize="inherit" />
						</IconButton>
					</Grid>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						onClick={handleOpenModalRegisterContact}
					>
						<AddIcon />
						Contatos
					</Button>
					<Modal
						open={openModalRegisterContact}
						onClose={handleCloseModalRegisterContact}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<DialogContent>
							<FormRegisterContact clientId={id} />
						</DialogContent>
					</Modal>
				</CardActions>
				{contacts.map((contact) => (
					<CardContact key={contact.id} contact={contact} />
				))}
			</Card>
		</Grid>
	);
};

export default CardClient;
