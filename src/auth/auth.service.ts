import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { SignInDto, SignUpDto } from './dtos/auth';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) {}

    async signup(data: SignUpDto) {
        const userAlreadyExists = await this.prismaService.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if (userAlreadyExists) {
            throw new UnauthorizedException('User already exists');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await this.prismaService.user.create({ 
            data : {
                ...data,
                password: hashedPassword,  
            }});

        return (
            {
                id: user.id,
                email: user.email,
                name: user.name,
            }
        );
    }

    async signin(data: SignInDto) {
        console.log({ data });

        return 'signin';
    }
}
