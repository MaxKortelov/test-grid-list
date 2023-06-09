import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { DB_ENV } from './src/models/config/db-config';
import { DataSource } from 'typeorm';
import { User } from './src/users/entities/user.entity';
import { Record } from './src/records/entities/record.entity';

dotenv.config({ path: `.${process.env.NODE_ENV}.env` });

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get<string>(DB_ENV.POSTGRES_HOST, {
    infer: true,
  }),
  port: configService.get<number>(DB_ENV.POSTGRES_PORT, {
    infer: true,
  }),
  username: configService.get<string>(DB_ENV.POSTGRES_USER, {
    infer: true,
  }),
  password: configService.get<string>(DB_ENV.POSTGRES_PASSWORD, {
    infer: true,
  }),
  database: configService.get<string>(DB_ENV.POSTGRES_DB, {
    infer: true,
  }),
  entities: [User, Record],
  migrations: ['./migrations/**.ts'],
  synchronize: true,
  logging: false,
});
