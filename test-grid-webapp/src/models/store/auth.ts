import { UserActionTypes } from "../../store/types/auth";

export interface IAuthState {
  user: IUser;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  surname: string;
}

export function loadAuthData(): { user: IUser } {
  return {
    user: {
      id: "",
      email: "",
      name: "Unknown",
      surname: ""
    }
  };
}

//actions

export interface IFetchUserData {
  type: UserActionTypes.FETCH_USER;
  payload: IAuthState;
}

export type UserAction = IFetchUserData;
