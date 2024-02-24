import { Module } from '@nestjs/common';
import { AuthController } from '@/modules/auth/auth.controller';
import { AuthService } from '@/modules/auth/auth.service';
import { UserRepositoryModule } from '@/repositories/user/user.repository.module';
import { UserCredentialRepositoryModule } from '@/repositories/userCredential/user.credential.repository.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from '@/config';
import { JwtStrategy } from '@/guards/auth/strategies/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from '@/guards/auth/auth.guard';
import { AuthRepositoryModule } from '@/repositories/auth/auth.repository.module';

@Module({
  imports: [
    UserRepositoryModule,
    UserCredentialRepositoryModule,
    AuthRepositoryModule,
    JwtModule.register({
      global: true,
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: config.JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    { provide: APP_GUARD, useClass: JwtGuard },
  ],
})
export class AuthModule {}
