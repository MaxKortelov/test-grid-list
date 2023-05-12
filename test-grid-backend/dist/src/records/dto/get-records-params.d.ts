import { ROLE_FILTERS, STATUS_FILTERS } from '../../models/records';
export interface IGetRecordsParams {
    page: string;
    itemsPerPage: string;
    filters: {
        name: '';
        status: STATUS_FILTERS;
        role: ROLE_FILTERS;
    };
}
