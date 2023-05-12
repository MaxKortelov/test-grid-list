import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}
  create(createRecordDto: CreateRecordDto) {
    return this.recordRepository.create(createRecordDto);
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
      id,
      name: 'test',
      address: 'street Test',
      amount: 0,
      role: 'ADMIN',
      status: 'CLOSE',
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
