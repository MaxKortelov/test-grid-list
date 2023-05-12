"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationOptions = exports.validationSchema = void 0;
const Joi = require("joi");
const db_config_1 = require("../models/config/db-config");
exports.validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('dev', 'prod').default('prod'),
    PORT: Joi.number().default(3001),
    POSTGRES_HOST: Joi.string().default(db_config_1.DB_ENV.POSTGRES_HOST),
    POSTGRES_PORT: Joi.number().default(5432),
    POSTGRES_DB: Joi.string().default(db_config_1.DB_ENV.POSTGRES_DB),
    POSTGRES_USER: Joi.string().default(db_config_1.DB_ENV.POSTGRES_USER),
    POSTGRES_PASSWORD: Joi.string().default(db_config_1.DB_ENV.POSTGRES_PASSWORD),
    SECRET: Joi.string().default('NO VALUE'),
});
exports.validationOptions = {
    allowUnknown: true,
    abortEarly: true,
};
//# sourceMappingURL=validation-config.js.map