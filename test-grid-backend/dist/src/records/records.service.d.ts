import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';
export declare class RecordsService {
    private readonly recordRepository;
    constructor(recordRepository: Repository<Record>);
    create(createRecordDto: CreateRecordDto): Record;
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
