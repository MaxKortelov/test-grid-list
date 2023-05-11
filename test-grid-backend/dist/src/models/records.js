"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_FILTERS = exports.ROLE = exports.STATUS_FILTERS = exports.STATUS = void 0;
var STATUS;
(function (STATUS) {
    STATUS["OPEN"] = "OPEN";
    STATUS["PENDING"] = "PENDING";
    STATUS["CLOSE"] = "CLOSE";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
var STATUS_FILTERS;
(function (STATUS_FILTERS) {
    STATUS_FILTERS["ALL"] = "ALL";
    STATUS_FILTERS["OPEN"] = "OPEN";
    STATUS_FILTERS["PENDING"] = "PENDING";
    STATUS_FILTERS["CLOSE"] = "CLOSE";
})(STATUS_FILTERS = exports.STATUS_FILTERS || (exports.STATUS_FILTERS = {}));
var ROLE;
(function (ROLE) {
    ROLE["CUSTOMER"] = "CUSTOMER";
    ROLE["BUSINESS"] = "BUSINESS";
    ROLE["ADMIN"] = "ADMIN";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
var ROLE_FILTERS;
(function (ROLE_FILTERS) {
    ROLE_FILTERS["ALL"] = "ALL";
    ROLE_FILTERS["CUSTOMER"] = "CUSTOMER";
    ROLE_FILTERS["BUSINESS"] = "CUSTOMER";
    ROLE_FILTERS["ADMIN"] = "CUSTOMER";
})(ROLE_FILTERS = exports.ROLE_FILTERS || (exports.ROLE_FILTERS = {}));
//# sourceMappingURL=records.js.map