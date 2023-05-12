"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const auth_config_1 = require("../models/config/auth-config");
const jwtConfig = async (configService) => {
    return {
        global: true,
        secret: await configService.get(auth_config_1.AUTH.SECRET_KEY),
        signOptions: {
            expiresIn: await configService.get(auth_config_1.AUTH.EXPIRED_IN),
        },
    };
};
exports.jwtConfig = jwtConfig;
//# sourceMappingURL=auth-config.js.map