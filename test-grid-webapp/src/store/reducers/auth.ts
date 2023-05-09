import { IAuthState, loadAuthData, UserAction } from "../../models/store/auth";
import { UserActionTypes } from "../types/auth";

export const initialAuthState: IAuthState = loadAuthData();

export const authReducer = (state = initialAuthState, action: UserAction): IAuthState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER: {
      return { ...state, user: action.payload.user };
    }
    default:
      return state;
  }
};
