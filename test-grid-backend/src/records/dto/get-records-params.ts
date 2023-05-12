import { ROLE_FILTERS, STATUS_FILTERS } from '../../models/records';

export interface IGetRecordsParams {
  page: number;
  itemsPerPage: number;
  filters: {
    name: '';
    status: STATUS_FILTERS;
    role: ROLE_FILTERS;
  };
}
