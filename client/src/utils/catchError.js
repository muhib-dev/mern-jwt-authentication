import axios from "axios";

export const catchError = (error) => {
  if (axios.isAxiosError(error) && error.response) {
    return error.response.data.message;
  }

  return error;
};
