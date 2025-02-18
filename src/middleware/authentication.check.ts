import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    if (!token) {
      throw new BadRequestException('Invalid API call');
    }

    if (token !== process.env.AUTHENTICATION_TOKEN) {
      throw new BadRequestException('Invalid Token');
    }

    next();
  }
}
