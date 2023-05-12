import { UserActionTypes } from "../../store/types/auth";
import { LOADING_STATE } from "../bootstrap";

export interface IAuthState {
  user: IUser;
  state: LOADING_STATE;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
}

export function loadAuthData(): IAuthState {
  return {
    user: {
      id: 0,
      email: "",
      username: "Unknown"
    },
    state: LOADING_STATE.INITIAL
  };
}

//actions

export interface IFetchUserData {
  type: UserActionTypes.LOGIN;
  payload: IUser;
}

export interface ILoginError {
  type: UserActionTypes.LOGIN_ERROR;
  payload: string;
}

export type UserAction = IFetchUserData | ILoginError;
