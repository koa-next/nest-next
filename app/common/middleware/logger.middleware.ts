import { Injectable, NestMiddleware } from '@nestjs/common';
const debug = require('debug')('nest-next:middleware:logger');

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    debug(`Request...`);
    next();
  }
}
