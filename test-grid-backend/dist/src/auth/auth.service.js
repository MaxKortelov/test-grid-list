"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(email, pass) {
        const user = await this.usersService.findOneByEmail(email);
        if ((user === null || user === void 0 ? void 0 : user.password) !== pass) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { username: user.username, id: user.id, email: user.email };
        return Object.assign({ access_token: await this.jwtService.signAsync(payload) }, payload);
    }
    async authorize(token) {
        const decodedJwtAccessToken = this.jwtService.decode(token);
        if (typeof decodedJwtAccessToken === 'object') {
            const { email, id, username } = await this.usersService.findOneByEmail(decodedJwtAccessToken === null || decodedJwtAccessToken === void 0 ? void 0 : decodedJwtAccessToken.email);
            return this.jwtService
                .verifyAsync(token)
                .then(() => ({
                access_token: token,
                email,
                id,
                username,
            }))
                .catch(() => ({
                access_token: token,
                email: '',
                id: 0,
                username: '',
            }));
        }
        return new common_1.UnauthorizedException();
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map