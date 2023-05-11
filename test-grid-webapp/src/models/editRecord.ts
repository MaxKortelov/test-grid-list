import { ROLE, STATUS } from "./store/records";
import { ILargeModalChildrenProps } from "./modal-popover";

export interface IEditRecordComponent extends ILargeModalChildrenProps {
  recordId?: number;
}

export interface IEditRecord {
  id: number;
  name: string;
  status: STATUS;
  role: ROLE;
  address: string;
  amount: number;
}

export function initialEditRecord(): IEditRecord {
  return {
    id: 0,
    name: "",
    status: STATUS.OPEN,
    role: ROLE.CUSTOMER,
    address: "",
    amount: 0
  };
}
