import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  // 健康检查
  @Get('/health')
  getHealth() {
    return 'ok';
  }

  @Get('/favicon.ico')
  getFavicon(@Res() res: Response) {
    return res.status(404);
  }
}
