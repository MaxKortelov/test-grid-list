"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = exports.DEFAULT_PORT = void 0;
const validation_config_1 = require("./validation-config");
exports.DEFAULT_PORT = 3001;
exports.appConfig = {
    isGlobal: true,
    envFilePath: `.${process.env.NODE_ENV}.env`,
    validationSchema: validation_config_1.validationSchema,
    validationOptions: validation_config_1.validationOptions,
};
//# sourceMappingURL=app-config.js.map