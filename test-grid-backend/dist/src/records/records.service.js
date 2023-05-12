"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const record_entity_1 = require("./entities/record.entity");
const records_1 = require("../models/records");
let RecordsService = class RecordsService {
    constructor(recordRepository) {
        this.recordRepository = recordRepository;
    }
    create(createRecordDto) {
        return this.recordRepository.save(createRecordDto);
    }
    async findAll(params) {
        const recordQuery = this.recordRepository
            .createQueryBuilder('users')
            .where('LOWER(role) LIKE LOWER(:role)', {
            role: `%${params.filters.role === records_1.ROLE_FILTERS.ALL ? '' : params.filters.role}%`,
        })
            .andWhere('LOWER(status) LIKE LOWER(:status)', {
            status: `%${params.filters.status === records_1.STATUS_FILTERS.ALL
                ? ''
                : params.filters.status}%`,
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
    findOne(id) {
        return this.recordRepository.findOneBy({ id });
    }
    update(id, updateRecordDto) {
        return this.recordRepository.save(Object.assign(Object.assign({}, updateRecordDto), { id }));
    }
    remove(id) {
        return this.recordRepository.delete(id);
    }
};
RecordsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(record_entity_1.Record)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecordsService);
exports.RecordsService = RecordsService;
//# sourceMappingURL=records.service.js.map