import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export default axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
