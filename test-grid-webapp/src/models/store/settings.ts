import { SettingsTypes } from "../../store/types/settings";

export interface ISettingsState {
  theme: THEME;
}

export enum THEME {
  LIGHT = "light",
  DARK = "dark"
}

export function loadSettingsData(): ISettingsState {
  return {
    theme: THEME.LIGHT
  };
}

//actions

export interface IChangeTheme {
  type: SettingsTypes.CHANGE_THEME;
  payload: THEME;
}

export type SettingsAction = IChangeTheme;
