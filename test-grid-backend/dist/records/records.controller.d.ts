import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
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
    findOne(id: string): {
        id: number;
        name: string;
        address: string;
        amount: number;
        role: string;
        status: string;
    };
    update(id: string, updateRecordDto: UpdateRecordDto): {
        id: number;
        name: string;
        address: string;
        amount: number;
    };
    remove(id: string): {
        id: number;
        name: string;
        address: string;
        amount: number;
    };
}
