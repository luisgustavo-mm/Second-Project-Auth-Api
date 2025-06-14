import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dtos/auth';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    async signIn(@Body() body: SignInDto) {
        return this.authService.signin(body);
    }

    @Post('signup')
    async signUp(@Body() body: SignUpDto) {
        return this.authService.signup(body);
    }
}
