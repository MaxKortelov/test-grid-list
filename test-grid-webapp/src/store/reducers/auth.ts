import { IAuthState, loadAuthData, UserAction } from "../../models/store/auth";
import { UserActionTypes } from "../types/auth";
import { LOADING_STATE } from "../../models/bootstrap";

export const initialAuthState: IAuthState = loadAuthData();

export const authReducer = (state = initialAuthState, { type, payload }: UserAction): IAuthState => {
  switch (type) {
    case UserActionTypes.LOGIN: {
      return { ...state, user: payload };
    }
    case UserActionTypes.LOGIN_ERROR: {
      return { ...state, state: LOADING_STATE.ERROR };
    }
    default:
      return state;
  }
};
