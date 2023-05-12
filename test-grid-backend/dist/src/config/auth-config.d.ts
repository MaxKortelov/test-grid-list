import { ConfigService } from '@nestjs/config';
export declare const jwtConfig: (configService: ConfigService) => Promise<{
    global: boolean;
    secret: string;
    signOptions: {
        expiresIn: string;
    };
}>;
