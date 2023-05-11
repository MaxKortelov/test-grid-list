"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const db_config_1 = require("../models/config/db-config");
const record_entity_1 = require("../records/entities/record.entity");
const user_entity_1 = require("../users/entities/user.entity");
const dbConfig = async (configService) => ({
    type: 'postgres',
    host: await configService.get(db_config_1.DB_ENV.POSTGRES_HOST, {
        infer: true,
    }),
    port: await configService.get(db_config_1.DB_ENV.POSTGRES_PORT, {
        infer: true,
    }),
    username: await configService.get(db_config_1.DB_ENV.POSTGRES_USER, {
        infer: true,
    }),
    password: await configService.get(db_config_1.DB_ENV.POSTGRES_PASSWORD, {
        infer: true,
    }),
    database: await configService.get(db_config_1.DB_ENV.POSTGRES_DB, {
        infer: true,
    }),
    synchronize: true,
    entities: [record_entity_1.Record, user_entity_1.User],
    autoLoadEntities: true,
});
exports.dbConfig = dbConfig;
//# sourceMappingURL=db-config.js.map