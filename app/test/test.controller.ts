import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  async getHello(): Promise<string> {
    try {
      await new Promise(resolve => {
        setTimeout(() => resolve(111), 1000);
      });
      return this.testService.getHello();
    } catch (err) {
      return 'err';
    }
  }
}
