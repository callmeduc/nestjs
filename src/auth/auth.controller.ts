import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('')
  getUser() {
    // return this.authService.register();
  }

  @Post('register')
  register(@Body() authDTO: AuthDTO) {
    // console.log(authDTO);
    // const user = await this.prismaS
    return this.authService.register(authDTO);
  }
}
