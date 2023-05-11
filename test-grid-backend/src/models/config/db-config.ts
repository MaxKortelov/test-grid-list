export enum DB_ENV {
  POSTGRES_HOST = 'POSTGRES_HOST',
  POSTGRES_PORT = 'POSTGRES_PORT',
  POSTGRES_DB = 'POSTGRES_DB',
  POSTGRES_USER = 'POSTGRES_USER',
  POSTGRES_PASSWORD = 'POSTGRES_PASSWORD',
}

export interface IDBConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
  entities: string[];
}
