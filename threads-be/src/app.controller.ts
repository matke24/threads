import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { API_PREFIX } from './const';

@Controller(API_PREFIX)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.welcome();
  }
}
