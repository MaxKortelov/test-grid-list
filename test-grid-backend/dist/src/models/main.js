"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
exports.corsOptions = {
    origin: [
        'http://localhost:3000',
        'https://localhost:3000',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    credentials: true,
};
//# sourceMappingURL=main.js.map