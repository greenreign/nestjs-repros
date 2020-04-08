import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService, private readonly configService: ConfigService) {}
  onModuleInit() {
    console.log('configService.TEST_KEY', this.configService.get('TEST_KEY'));
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
