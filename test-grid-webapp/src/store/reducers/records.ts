import { IRecordsState, loadRecordsState, RecordsAction } from "../../models/store/records";
import { RecordsTypes } from "../types/records";

export const initialSettingsState: IRecordsState = loadRecordsState();

export const recordsReducer = (state = initialSettingsState, { type, payload }: RecordsAction): IRecordsState => {
  switch (type) {
    case RecordsTypes.CHANGE_RECORDS: {
      return { ...state, records: payload };
    }
    case RecordsTypes.CHANGE_FILTERS: {
      return { ...state, filters: payload };
    }
    case RecordsTypes.CHANGE_PAGINATION: {
      return { ...state, pagination: payload };
    }
    default:
      return state;
  }
};
