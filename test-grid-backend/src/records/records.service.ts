import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Injectable()
export class RecordsService {
  create(createRecordDto: CreateRecordDto) {
    return {
      id: 0,
      name: 'test',
      address: 'street Test',
      amount: 0,
    };
  }

  findAll() {
    return {
      page: 1,
      pages: 1,
      itemsPerPage: 20,
      records: [
        {
          id: 0,
          name: '123',
          address: '123',
          amount: 0,
        },
      ],
    };
  }

  findOne(id: number) {
    return {
      id: 0,
      name: 'test',
      address: 'street Test',
      amount: 0,
    };
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return {
      id: 0,
      name: 'test',
      address: 'street Test',
      amount: 0,
    };
  }

  remove(id: number) {
    return {
      id: 0,
      name: 'test',
      address: 'street Test',
      amount: 0,
    };
  }
}
