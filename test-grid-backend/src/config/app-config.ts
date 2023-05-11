import { validationOptions, validationSchema } from './validation-config';

export const DEFAULT_PORT = 3001;

export const appConfig = {
  isGlobal: true,
  envFilePath: `.${process.env.NODE_ENV}.env`,
  validationSchema,
  validationOptions,
};
