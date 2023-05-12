export interface IAuthConfig {
    global: boolean;
    secret: string;
    signOptions: {
        expiresIn: string;
    };
}
export declare enum AUTH {
    SECRET_KEY = "SECRET_KEY",
    EXPIRED_IN = "EXPIRED_IN"
}
export declare const IS_PUBLIC_KEY = "isPublic";
export declare const SkipAuth: () => import("@nestjs/common").CustomDecorator<string>;
