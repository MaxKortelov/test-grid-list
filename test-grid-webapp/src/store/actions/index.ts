import * as AuthAction from "./auth";
import * as SettingsAction from "./settings";

// Add new action-creators to the object = mkortelov
const actions = {
  ...AuthAction,
  ...SettingsAction
};

export default actions;
