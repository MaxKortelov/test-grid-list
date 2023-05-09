import { IAuthState, UserAction } from "../../models/store/auth";
import { Dispatch } from "redux";
import { UserActionTypes } from "../types/auth";

export const fetchAuthData = (auth: IAuthState) => (dispatch: Dispatch<UserAction>) => {
  dispatch({
    type: UserActionTypes.FETCH_USER,
    payload: auth
  });
};
