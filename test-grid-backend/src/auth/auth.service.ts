import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, id: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      ...payload,
    };
  }

  async authorize(token): Promise<any> {
    const decodedJwtAccessToken = this.jwtService.decode(token);
    if (typeof decodedJwtAccessToken === 'object') {
      const { email, id, username } = await this.usersService.findOneByEmail(
        decodedJwtAccessToken?.email,
      );

      return {
        access_token: token,
        email,
        id,
        username,
      };
    }
    return new UnauthorizedException();
  }
}
