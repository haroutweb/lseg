import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { NotFoundException } from '../exceptions/not-found-exception';
import { BadRequestException } from '../exceptions/bad-request-exception';
import { PermissionDeniedException } from '../exceptions/permission-denied-exception';
import Exception from '../exceptions/exception';
import { UnauthorizedException } from '../exceptions/unauthorized-exception';
import { TooManyRequestsException } from '../exceptions/too-many-requests-exception';

export interface IHttpResponse {
  code: number;
  message: string;
}

export const successResponse = (res: Response, code: number = StatusCodes.OK, data = {}) => {
  res.status(code).send(data);
};

export const failResponse = (res: Response, error: Exception | Error | unknown, data = {}) => {
  let httpStatus = StatusCodes.INTERNAL_SERVER_ERROR;
  let errorMessage = (error as Error)?.message;

  if (error instanceof NotFoundException) {
    httpStatus = StatusCodes.NOT_FOUND;
  } else if (error instanceof BadRequestException) {
    httpStatus = StatusCodes.BAD_REQUEST;
  } else if (error instanceof PermissionDeniedException) {
    httpStatus = StatusCodes.FORBIDDEN;
  } else if (error instanceof UnauthorizedException) {
    httpStatus = StatusCodes.UNAUTHORIZED;
  } else if (error instanceof TooManyRequestsException) {
    httpStatus = StatusCodes.TOO_MANY_REQUESTS;
  }

  if (httpStatus === StatusCodes.INTERNAL_SERVER_ERROR) {
    errorMessage = 'Internal Server Error!';
  }

  res.status(httpStatus).send({
    code: (error as Exception)?.code,
    message: errorMessage,
    data,
  });
};
