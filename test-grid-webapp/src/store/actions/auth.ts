import { IUser, UserAction } from "../../models/store/auth";
import { Dispatch } from "redux";
import { UserActionTypes } from "../types/auth";
import { api } from "../../api";
import { AxiosResponse } from "axios";
import { ILoginParams } from "../../models/login";

// effects
export const fetchUserData = (loginParams: ILoginParams) => async (dispatch: Dispatch<UserAction>) => {
  api
    .get<AxiosResponse<IUser>>("login", {
      params: loginParams
    })
    .then((auth) => dispatch(login(auth.data.data)))
    .catch(() => dispatch(loginError("Invalid user")));
};

// actions
export const login = (user: IUser): UserAction => {
  return {
    type: UserActionTypes.LOGIN,
    payload: user
  };
};

export const loginError = (message: string): UserAction => {
  return {
    type: UserActionTypes.LOGIN_ERROR,
    payload: message
  };
};
