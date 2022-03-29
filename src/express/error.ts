import * as express from 'express';
import logger from 'logger-genesis';

export class ServiceError extends Error {
  public code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}

export const errorMiddleware = (
  error: Error,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  if (error.name === 'ValidationError') {
    res.status(400).send({
      type: error.name,
      message: error.message,
    });
  } else if (error instanceof ServiceError) {
    res.status(error.code).send({
      type: error.name,
      message: error.message,
    });
  } else if (error.name == 'MongoError') {
    res.status(409).send({
      type: error.name,
      message: error.message,
    });
  } else {
    res.status(500).send({
      type: error.name,
      message: error.message,
    });
  }

  logger.error(false, 'SYSTEM', 'Error', error.message);

  // next();
};
