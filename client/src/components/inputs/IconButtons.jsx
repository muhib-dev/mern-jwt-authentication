import IconButton from "@mui/material/IconButton";
import { AddIcon, DeleteIcon, EditIcon } from "assets/icons";

export const DeleteIconButton = (props) => {
  return (
    <IconButton
      aria-label="delete"
      sx={{ p: 0, color: "error.main" }}
      {...props}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export const EditIconButton = (props) => {
  return (
    <IconButton
      aria-label="edit"
      sx={{ p: 0, color: "primary.400" }}
      {...props}
    >
      <EditIcon />
    </IconButton>
  );
};

export const AddIconButton = (props) => {
  return (
    <IconButton
      aria-label="add"
      sx={{ p: 0, color: "success.main" }}
      {...props}
    >
      <AddIcon />
    </IconButton>
  );
};
