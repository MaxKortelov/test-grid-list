import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';
import { IGetRecordsParams } from './dto/get-records-params';
export declare class RecordsService {
    private readonly recordRepository;
    constructor(recordRepository: Repository<Record>);
    create(createRecordDto: CreateRecordDto): Promise<CreateRecordDto & Record>;
    findAll(params: IGetRecordsParams): Promise<{
        page: number;
        pages: number;
        itemsPerPage: number;
        records: Record[];
    }>;
    findOne(id: number): Promise<Record>;
    update(id: number, updateRecordDto: UpdateRecordDto): Promise<{
        id: number;
    } & Record>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
