"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const dotenv = require("dotenv");
const db_config_1 = require("./src/models/config/db-config");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./src/users/entities/user.entity");
const record_entity_1 = require("./src/records/entities/record.entity");
dotenv.config({ path: `.${process.env.NODE_ENV}.env` });
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: configService.get(db_config_1.DB_ENV.POSTGRES_HOST, {
        infer: true,
    }),
    port: configService.get(db_config_1.DB_ENV.POSTGRES_PORT, {
        infer: true,
    }),
    username: configService.get(db_config_1.DB_ENV.POSTGRES_USER, {
        infer: true,
    }),
    password: configService.get(db_config_1.DB_ENV.POSTGRES_PASSWORD, {
        infer: true,
    }),
    database: configService.get(db_config_1.DB_ENV.POSTGRES_DB, {
        infer: true,
    }),
    entities: [user_entity_1.User, record_entity_1.Record],
    migrations: ['./migrations/**.ts'],
    synchronize: true,
    logging: false,
});
//# sourceMappingURL=typeOrm.config.js.map