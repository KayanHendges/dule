import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { config } from '@/config';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MailerModule.forRoot({
      transport: {
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        auth: {
          user: config.SMTP_EMAIL,
          pass: config.SMTP_PASSWORD,
        },
      },
      defaults: {
        from: config.SMTP_EMAIL,
      },
    }),
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
