import { SetMetadata } from '@nestjs/common';

export interface IAuthConfig {
  global: boolean;
  secret: string;
  signOptions: { expiresIn: string };
}

export enum AUTH {
  SECRET_KEY = 'SECRET_KEY',
  EXPIRED_IN = 'EXPIRED_IN',
}

export const IS_PUBLIC_KEY = 'isPublic';
export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
