import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
export declare class RecordsService {
    create(createRecordDto: CreateRecordDto): {
        id: number;
        name: string;
        address: string;
        amount: number;
    };
    findAll(): {
        page: number;
        pages: number;
        itemsPerPage: number;
        records: {
            id: number;
            name: string;
            address: string;
            amount: number;
        }[];
    };
    findOne(id: number): {
        id: number;
        name: string;
        address: string;
        amount: number;
        role: string;
        status: string;
    };
    update(id: number, updateRecordDto: UpdateRecordDto): {
        id: number;
        name: string;
        address: string;
        amount: number;
    };
    remove(id: number): {
        id: number;
        name: string;
        address: string;
        amount: number;
    };
}
