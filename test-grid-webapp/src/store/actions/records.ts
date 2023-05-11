import { IFilters, IPagination, IRecord, RecordsAction } from "../../models/store/records";
import { RecordsTypes } from "../types/records";
import { api } from "../../api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { IRecordsDTO } from "../../models/dto/recordsDTO";

// effects

export const getRecords = (): ThunkAction<void, RootState, unknown, RecordsAction> => async (dispatch, getState) => {
  await api
    .get<IRecordsDTO>("records", {
      params: {
        filters: getState().records.filters,
        page: getState().records.pagination.page,
        itemsPerPage: getState().records.pagination.itemsPerPage
      }
    })
    .then((res) => {
      const { records, page, itemsPerPage, pages } = res.data;
      const pagination = { page, itemsPerPage, pages };
      dispatch(changeRecords(records));
      dispatch(changePagination(pagination));
    })
    .catch((e) => console.log(e));
};

// actions

export const changeRecords = (records: IRecord[]): RecordsAction => {
  return {
    type: RecordsTypes.CHANGE_RECORDS,
    payload: records
  };
};

export const changeFilters = (filters: IFilters): RecordsAction => {
  return {
    type: RecordsTypes.CHANGE_FILTERS,
    payload: filters
  };
};

export const changePagination = (pagination: IPagination): RecordsAction => {
  return {
    type: RecordsTypes.CHANGE_PAGINATION,
    payload: pagination
  };
};
