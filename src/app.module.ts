import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, NoteModule],
})
export class AppModule {}
