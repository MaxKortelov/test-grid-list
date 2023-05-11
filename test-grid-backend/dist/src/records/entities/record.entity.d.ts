import { ROLE, STATUS } from '../../models/records';
export declare class Record {
    id: number;
    name: string;
    status: STATUS;
    role: ROLE;
    address: string;
    amount: number;
}
