import joi from 'joi';
import j2s from 'joi-to-swagger';
import { StatusCodes } from 'http-status-codes';

export const joiSchema = joi.object().keys({
  code: joi.number().example(StatusCodes.NOT_FOUND),
  message: joi.string().example('Not Found'),
});

const notFoundScheme = j2s(joiSchema).swagger;

export default notFoundScheme;
