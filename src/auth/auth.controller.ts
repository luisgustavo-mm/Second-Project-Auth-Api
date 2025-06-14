import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    async signIn(@Body() body: SignInDto) {
        await this.authService.signin(body);

        return body;
    }

    @Post('signup')
    async signUp(@Body() body: SignUpDto) {
        await this.authService.signup(body);

        return body;
    }
}
