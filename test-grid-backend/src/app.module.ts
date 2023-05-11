import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordsModule } from './records/records.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './config/app-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db-config';

@Module({
  imports: [
    RecordsModule,
    UsersModule,
    ConfigModule.forRoot(appConfig),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: dbConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
