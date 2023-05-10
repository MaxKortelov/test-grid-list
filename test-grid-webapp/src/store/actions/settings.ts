import { SettingsAction, THEME } from "../../models/store/settings";
import { SettingsTypes } from "../types/settings";

// actions

export const changeTheme = (theme: THEME): SettingsAction => {
  return {
    type: SettingsTypes.CHANGE_THEME,
    payload: theme
  };
};
