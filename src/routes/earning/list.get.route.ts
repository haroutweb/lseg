import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { failResponse, successResponse } from '../../utils/baseResponse';
import logger from '../../services/logger';
import GetAverageSchema from '../../schemas/earning/list.get.schema';
import { getData } from '../../services/earning';
import { ValidationException } from '../../exceptions/validation-exception';
import { AverageResponse, QueryParams } from '../../schemas/earning/_interfaces/earning';
import validationErrorScheme from '../../utils/schemes/varidation-error.schema';
import badRequestSchema from '../../utils/schemes/bad-request.schema';

export const swGetEarning = {
  summary: 'GET method that returns average earning of companies',
  tags: ['LSEG'],
  parameters: [
    {
      name: 'cur',
      in: 'query',
      required: true,
      type: 'array',
    },
    {
      name: 'targetCur',
      in: 'query',
      required: true,
      type: 'string',
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {},
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: GetAverageSchema
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: {
            ...badRequestSchema,
          },
        },
      },
    },
    601: {
      description: 'Invalid parameters',
      content: {
        'application/json': {
          schema: {
            ...validationErrorScheme,
          },
        },
      },
    },
  },
};

export default async (req: Request, res: Response) => {
  try {
    const { cur, targetCur } = req.query as QueryParams;

    if (!cur || !cur.length || !targetCur) {
      throw new ValidationException();
    }

    const data = await getData(cur, targetCur);

    successResponse(res, StatusCodes.OK, data as AverageResponse);
  } catch (error) {
    logger.error('get earning average error ', error);
    failResponse(res, error);
  }
};
