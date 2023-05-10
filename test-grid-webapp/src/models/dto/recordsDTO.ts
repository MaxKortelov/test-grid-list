import { IRecord } from "../store/records";

export interface IRecordsDTO {
  page: number;
  pages: number;
  itemsPerPage: number;
  records: IRecord[];
}
