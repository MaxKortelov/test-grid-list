import { ConfigService } from '@nestjs/config';
import { AUTH } from '../models/config/auth-config';

// console.log(process.env.SECRET);

// export const jwtConstants = {
//   secret: 'process.env.SECRET',
// };

export const jwtConfig = async (configService: ConfigService) => {
  return {
    global: true,
    secret: await configService.get<string>(AUTH.SECRET_KEY),
    signOptions: {
      expiresIn: await configService.get<string>(AUTH.EXPIRED_IN),
    },
  };
};
