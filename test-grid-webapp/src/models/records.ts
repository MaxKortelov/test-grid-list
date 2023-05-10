import { IRecord, ROLE, STATUS } from "./store/records";

export interface IRecordComponent {
  record: IRecord;
}

export interface IRecordEdit {
  name: string;
  status: STATUS;
  role: ROLE;
  address: string;
  amount: number;
}
