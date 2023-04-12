import { Injectable } from '@nestjs/common';
import { User, Note } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async register(authDTO: AuthDTO) {
    try {
      // console.log('authDTO service', this.prismaService.user.create());
      const user = await this.prismaService.user.create({
        data: {
          email: authDTO.email,
          hashedPassword: 'hashedPassword',
        },
      });
      console.log('user service', user);
      return user;
    } catch (error) {
      console.log('error', error);
    }
  }
}
