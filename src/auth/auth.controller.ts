import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { request } from 'http';
import { AuthGuard } from './dtos/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signUp(@Body() body: SignUpDTO) {
        return this.authService.signup(body);
    }

    @Post('signin')
    async signIn(@Body() body: SignInDTO) {
        return this.authService.signin(body);
    }
@UseGuards(AuthGuard)
@Get('me')
async me (@Request() request){
    return request.user;
}
}
