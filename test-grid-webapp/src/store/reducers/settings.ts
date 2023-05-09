import { SettingsTypes } from "../types/settings";
import { ISettingsState, loadSettingsData, SettingsAction } from "../../models/store/settings";

export const initialSettingsState: ISettingsState = loadSettingsData();

export const settingsReducer = (state = initialSettingsState, { type, payload }: SettingsAction): ISettingsState => {
  switch (type) {
    case SettingsTypes.CHANGE_THEME: {
      return { ...state, theme: payload };
    }
    default:
      return state;
  }
};
