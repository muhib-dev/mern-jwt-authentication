import { format } from "date-fns";

export const dateFormat = (date) => {
  if (new Date(date).toString() === "Invalid Date") {
    return "";
  }
  return format(new Date(date), "dd MMM, yyyy");
};

export const dateTimeFormat = (date) => {
  if (new Date(date).toString() === "Invalid Date") {
    return "";
  }
  return format(new Date(date), "dd MMM, yyyy (hh:mm a)");
};
