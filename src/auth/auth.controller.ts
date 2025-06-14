import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';

@Controller('auth')
export class AuthController {

    @Post('signin')
    async signIn(@Body() body: SignInDto) {
        console.log({ body });
        return body;
    }

    @Post('signup')
    async signUp(@Body() body: SignUpDto) {
        console.log({ body });
        return body;
    }
}
