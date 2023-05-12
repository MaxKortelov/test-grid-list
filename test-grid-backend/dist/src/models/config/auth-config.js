"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAuth = exports.IS_PUBLIC_KEY = exports.AUTH = void 0;
const common_1 = require("@nestjs/common");
var AUTH;
(function (AUTH) {
    AUTH["SECRET_KEY"] = "SECRET_KEY";
    AUTH["EXPIRED_IN"] = "EXPIRED_IN";
})(AUTH = exports.AUTH || (exports.AUTH = {}));
exports.IS_PUBLIC_KEY = 'isPublic';
const SkipAuth = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.SkipAuth = SkipAuth;
//# sourceMappingURL=auth-config.js.map