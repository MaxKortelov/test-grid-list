import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    create(createRecordDto: CreateRecordDto): Promise<CreateRecordDto & import("./entities/record.entity").Record>;
    findAll(): Promise<{
        page: number;
        pages: number;
        itemsPerPage: number;
        records: import("./entities/record.entity").Record[];
    }>;
    findOne(id: string): Promise<import("./entities/record.entity").Record>;
    update(id: string, updateRecordDto: UpdateRecordDto): Promise<{
        id: number;
    } & import("./entities/record.entity").Record>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
