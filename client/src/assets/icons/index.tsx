import { IconTrash, IconEdit, IconSquarePlus } from "@tabler/icons";

export const DeleteIcon = ({ stroke = 1.5, size = 19 }) => {
  return <IconTrash stroke={stroke} size={size} />;
};

export const EditIcon = ({ stroke = 1.5, size = 19 }) => {
  return <IconEdit stroke={stroke} size={size} />;
};

export const AddIcon = ({ stroke = 1.5, size = 19 }) => {
  return <IconSquarePlus stroke={stroke} size={size} />;
};
