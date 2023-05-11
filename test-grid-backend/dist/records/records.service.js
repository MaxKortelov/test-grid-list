"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
let RecordsService = class RecordsService {
    create(createRecordDto) {
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
    findOne(id) {
        return {
            id: 0,
            name: 'test',
            address: 'street Test',
            amount: 0,
        };
    }
    update(id, updateRecordDto) {
        return {
            id: 0,
            name: 'test',
            address: 'street Test',
            amount: 0,
        };
    }
    remove(id) {
        return {
            id: 0,
            name: 'test',
            address: 'street Test',
            amount: 0,
        };
    }
};
RecordsService = __decorate([
    (0, common_1.Injectable)()
], RecordsService);
exports.RecordsService = RecordsService;
//# sourceMappingURL=records.service.js.map