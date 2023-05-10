import axios from "axios";

const protocol = process.env.REACT_APP_BACKEND_PROTOCOL + "://";
const host = process.env.REACT_APP_BACKEND_HOST;
const port = process.env.REACT_APP_BACKEND_PORT ? ":" + process.env.REACT_APP_BACKEND_PORT : "";

export const api = axios.create({
  withCredentials: false,
  baseURL: `${protocol}${host}${port}`
});
