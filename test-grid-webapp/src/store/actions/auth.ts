import { IUser, UserAction } from "../../models/store/auth";
import { UserActionTypes } from "../types/auth";
import { api } from "../../api";
import { ILoginParams } from "../../models/login";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

// effects
export const fetchUserData =
  (loginParams: ILoginParams): ThunkAction<void, RootState, unknown, UserAction> =>
  async (dispatch) => {
    api
      .get<IUser>("login", {
        params: loginParams
      })
      .then((auth) => dispatch(login(auth.data)))
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
