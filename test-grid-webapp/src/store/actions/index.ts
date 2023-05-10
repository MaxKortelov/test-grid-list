import * as AuthAction from "./auth";
import * as SettingsAction from "./settings";
import * as RecordsAction from "./records";

// Add new action-creators to the object = mkortelov
const actions = {
  ...AuthAction,
  ...SettingsAction,
  ...RecordsAction
};

export default actions;
