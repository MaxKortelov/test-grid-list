import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';
import { IGetRecordsParams } from './dto/get-records-params';
import { ROLE_FILTERS, STATUS, STATUS_FILTERS } from '../models/records';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}
  create(createRecordDto: CreateRecordDto) {
    return this.recordRepository.save(createRecordDto);
  }

  async findAll(params: IGetRecordsParams) {
    const recordQuery = this.recordRepository
      .createQueryBuilder('users')
      .where('LOWER(role) LIKE LOWER(:role)', {
        role: `%${
          params.filters.role === ROLE_FILTERS.ALL ? '' : params.filters.role
        }%`,
      })
      .andWhere('LOWER(status) LIKE LOWER(:status)', {
        status: `%${
          params.filters.status === STATUS_FILTERS.ALL
            ? ''
            : params.filters.status
        }%`,
      })
      .andWhere('LOWER(name) LIKE LOWER(:name)', {
        name: `%${params.filters.name}%`,
      })
      .orderBy('name', 'DESC');

    const records = await recordQuery
      .take(params.itemsPerPage)
      .skip(params.itemsPerPage * (params.page - 1))
      .getMany();

    const row = await recordQuery.getCount();

    return {
      page: Number(params.page),
      pages: Math.ceil(row / params.itemsPerPage),
      itemsPerPage: params.itemsPerPage,
      records,
    };
  }

  findOne(id: number) {
    return this.recordRepository.findOneBy({ id });
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return this.recordRepository.save({
      ...updateRecordDto,
      id,
    });
  }

  remove(id: number) {
    return this.recordRepository.delete(id);
  }
}
