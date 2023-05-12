import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SkipAuth } from '../models/config/auth-config';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @SkipAuth()
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @SkipAuth()
  @Get()
  getProfile(@Request() req) {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer'
      ? this.authService.authorize(token)
      : new UnauthorizedException();
  }
}
