import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import next from 'next';
import Server from 'next/dist/next-server/server/next-server';
import config from '../../../config';

const debug = require('debug')('filters:next');

type App = Server & {
  prepared?: boolean;
};

const app: App = next(config.next);

@Catch(HttpException)
export class NextFilter implements ExceptionFilter<HttpException> {
  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();
    const errorMsg = exception.message;
    const method = request.method;
    const urlPath = request.path;

    try {
      if (
        (statusCode === 404 && method === 'GET') ||
        /\/_next\//.test(urlPath)
      ) {
        debug('next渲染');
        if (!app.prepared) {
          await app.prepare();
          app.prepared = true;
        }
        const requestHandler = app.getRequestHandler();
        return requestHandler(request, response, request.path);
      }

      debug('nest渲染');
      return response.status(statusCode).json({
        ...errorMsg,
      });
    } catch (err) {
      debug('next渲染出错%o', err);
      return response.status(statusCode).json({
        ...errorMsg,
        err,
      });
    }
  }
}
