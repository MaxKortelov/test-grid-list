import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { settingsReducer } from "./settings";

export const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
