import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { settingsReducer } from "./settings";
import { recordsReducer } from "./records";

export const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  records: recordsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
