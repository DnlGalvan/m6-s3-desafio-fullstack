import {
	CardContent,
	DialogContent,
	Grid,
	IconButton,
	Modal,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { ClientsContext } from "../../context/ClientsContext";
import { IContactProps } from "../../interfaces/IContactProps";
import FormEditContact from "../FormEditContact/FormEditContact";

const CardContact = ({ contact }: IContactProps) => {
	const {
		getContactById,
		DeleteContact,
		openModalEditContact,
		handleCloseModalEditContact,
	} = useContext(ClientsContext);

	return (
		<CardContent
			key={contact.id}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Grid>
				<Typography variant="h6" component="div">
					{contact.name}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{contact.email}
				</Typography>
				<Typography variant="body2">{contact.phone_number}</Typography>
			</Grid>
			<Grid>
				<IconButton
					aria-label="edit"
					size="small"
					onClick={() => getContactById(contact.id)}
				>
					<EditIcon fontSize="inherit" />
				</IconButton>
				<Modal
					open={openModalEditContact}
					onClose={handleCloseModalEditContact}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<DialogContent>
						<FormEditContact />
					</DialogContent>
				</Modal>
				<IconButton
					aria-label="delete"
					size="small"
					onClick={() => DeleteContact(contact.id)}
				>
					<DeleteIcon fontSize="inherit" />
				</IconButton>
			</Grid>
		</CardContent>
	);
};

export default CardContact;
