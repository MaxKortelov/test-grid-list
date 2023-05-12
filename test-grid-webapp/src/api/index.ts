import axios from "axios";
import { getCookie, setCookie } from "../services/localStorageService";
import { IUser } from "../models/store/auth";

const protocol = process.env.REACT_APP_BACKEND_PROTOCOL + "://";
const host = process.env.REACT_APP_BACKEND_HOST;
const port = process.env.REACT_APP_BACKEND_PORT ? ":" + process.env.REACT_APP_BACKEND_PORT : "";

const token = getCookie("token") ?? "";
console.log(getCookie("token"));

export const authApi = axios.create({
  withCredentials: false,
  baseURL: `${protocol}${host}${port}`
});

export const authorize = () =>
  authApi.get<IUser>("auth", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

export let api = axios.create({
  withCredentials: false,
  baseURL: `${protocol}${host}${port}`,
  headers: {
    Authorization: "Bearer " + token
  }
});

authApi.interceptors.response.use(
  function (response) {
    setCookie("token", response.data.access_token);
    // reassigned api with credentials
    api = axios.create({
      withCredentials: false,
      baseURL: `${protocol}${host}${port}`,
      headers: {
        Authorization: "Bearer " + response.data.access_token
      }
    });

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
