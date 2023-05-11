import { ConfigService } from '@nestjs/config';
import { IEnvironmentalVariables } from '../models/config/environmentalVariables';
import { DB_ENV } from '../models/config/db-config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { Record } from '../records/entities/record.entity';
import { User } from '../users/entities/user.entity';

export const dbConfig = async (
  configService: ConfigService<IEnvironmentalVariables, true>,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: await configService.get<string>(DB_ENV.POSTGRES_HOST, {
    infer: true,
  }),
  port: await configService.get<number>(DB_ENV.POSTGRES_PORT, {
    infer: true,
  }),
  username: await configService.get<string>(DB_ENV.POSTGRES_USER, {
    infer: true,
  }),
  password: await configService.get<string>(DB_ENV.POSTGRES_PASSWORD, {
    infer: true,
  }),
  database: await configService.get<string>(DB_ENV.POSTGRES_DB, {
    infer: true,
  }),
  synchronize: true,
  entities: [Record, User],
  autoLoadEntities: true,
});
