import axios from "axios";
import { IUser } from "../models/store/auth";
import { getStorageItem, removeStorageItem, setStorageItem } from "../services/localStorageService";

const protocol = process.env.REACT_APP_BACKEND_PROTOCOL + "://";
const host = process.env.REACT_APP_BACKEND_HOST;
const port = process.env.REACT_APP_BACKEND_PORT ? ":" + process.env.REACT_APP_BACKEND_PORT : "";

export interface IAuthDto extends IUser {
  access_token: string;
}

export const authApi = axios.create({
  withCredentials: false,
  baseURL: `${protocol}${host}${port}`
});

export const authorize = () =>
  authApi.get<IAuthDto>("auth", {
    headers: {
      Authorization: "Bearer " + getStorageItem("token")
    }
  });

export let api = axios.create({
  withCredentials: false,
  baseURL: `${protocol}${host}${port}`,
  headers: {
    Authorization: "Bearer " + getStorageItem("token")
  }
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      removeStorageItem("token");
    }
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  function (response) {
    setStorageItem("token", response.data.access_token);
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
