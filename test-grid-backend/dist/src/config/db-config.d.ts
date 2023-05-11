import { ConfigService } from '@nestjs/config';
import { IEnvironmentalVariables } from '../models/config/environmentalVariables';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
export declare const dbConfig: (configService: ConfigService<IEnvironmentalVariables, true>) => Promise<TypeOrmModuleOptions>;
