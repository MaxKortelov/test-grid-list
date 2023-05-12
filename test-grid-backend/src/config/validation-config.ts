import * as Joi from 'joi';
import { DB_ENV } from '../models/config/db-config';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('dev', 'prod').default('prod'),
  PORT: Joi.number().default(3001),
  POSTGRES_HOST: Joi.string().default(DB_ENV.POSTGRES_HOST),
  POSTGRES_PORT: Joi.number().default(5432),
  POSTGRES_DB: Joi.string().default(DB_ENV.POSTGRES_DB),
  POSTGRES_USER: Joi.string().default(DB_ENV.POSTGRES_USER),
  POSTGRES_PASSWORD: Joi.string().default(DB_ENV.POSTGRES_PASSWORD),
  SECRET: Joi.string().default('NO VALUE'),
});

export const validationOptions = {
  allowUnknown: true,
  abortEarly: true,
};
