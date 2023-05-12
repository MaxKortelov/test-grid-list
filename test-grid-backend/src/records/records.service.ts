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
    return this.recordRepository.save(createRecordDto);
  }

  async findAll() {
    const records = await this.recordRepository.find();
    return {
      page: 1,
      pages: 1,
      itemsPerPage: 20,
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
