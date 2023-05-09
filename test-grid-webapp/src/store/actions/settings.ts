import { Dispatch } from "redux";
import { SettingsAction, THEME } from "../../models/store/settings";
import { SettingsTypes } from "../types/settings";

export const changeTheme = (theme: THEME) => (dispatch: Dispatch<SettingsAction>) => {
  dispatch({
    type: SettingsTypes.CHANGE_THEME,
    payload: theme
  });
};
