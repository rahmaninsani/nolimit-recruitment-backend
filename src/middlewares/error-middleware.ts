import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import status from 'http-status';

import { ResponseError } from '../errors';
import { IResponse } from '../interfaces';

const errorMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    next();
    return;
  }

  let response: IResponse;

  if (err instanceof ResponseError) {
    response = {
      code: err.code,
      status: status[err.code] || status[status.INTERNAL_SERVER_ERROR],
      data: null,
      message: err.message,
    };
  } else if (err instanceof ValidationError) {
    response = {
      code: status.BAD_REQUEST,
      status: status[status.BAD_REQUEST],
      data: null,
      message: err.message,
    };
  } else {
    response = {
      code: status.INTERNAL_SERVER_ERROR,
      status: status[status.INTERNAL_SERVER_ERROR],
      data: null,
      message: err.message,
    };
  }

  res.status(response.code).json(response).end();
};

export default errorMiddleware;
