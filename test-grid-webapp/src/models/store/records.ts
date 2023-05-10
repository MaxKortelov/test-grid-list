import { RecordsTypes } from "../../store/types/records";

export interface IRecordsState {
  records: IRecord[];
  filters: IFilters;
  pagination: IPagination;
}

export function loadRecordsState(): IRecordsState {
  return {
    records: [],
    filters: initialFilters(),
    pagination: initialPagination()
  };
}

export interface IRecord {
  id: number;
  name: string;
  address: string;
  amount: number;
}

export enum STATUS {
  OPEN = "OPEN",
  PENDING = "PENDING",
  CLOSE = "CLOSE"
}

export enum STATUS_FILTERS {
  ALL = "ALL",
  OPEN = "OPEN",
  PENDING = "PENDING",
  CLOSE = "CLOSE"
}

export enum ROLE {
  CUSTOMER = "CUSTOMER",
  BUSINESS = "CUSTOMER",
  ADMIN = "CUSTOMER"
}

export enum ROLE_FILTERS {
  ALL = "ALL",
  CUSTOMER = "CUSTOMER",
  BUSINESS = "CUSTOMER",
  ADMIN = "CUSTOMER"
}

export interface IFilters {
  name: string;
  status: STATUS_FILTERS;
  role: ROLE_FILTERS;
}

export function initialFilters(): IFilters {
  return {
    name: "",
    status: STATUS_FILTERS.ALL,
    role: ROLE_FILTERS.ALL
  };
}

export interface IPagination {
  pages: number;
  page: number;
  itemsPerPage: number;
}

export function initialPagination(): IPagination {
  return {
    pages: 1,
    page: 1,
    itemsPerPage: 20
  };
}

//actions

export interface IChangeRecords {
  type: RecordsTypes.CHANGE_RECORDS;
  payload: IRecord[];
}

export interface IChangeFilters {
  type: RecordsTypes.CHANGE_FILTERS;
  payload: IFilters;
}

export interface IChangePagination {
  type: RecordsTypes.CHANGE_PAGINATION;
  payload: IPagination;
}

export type RecordsAction = IChangeRecords | IChangeFilters | IChangePagination;
