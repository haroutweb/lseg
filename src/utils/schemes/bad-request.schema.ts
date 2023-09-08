import joi from 'joi';
import j2s from 'joi-to-swagger';
import { StatusCodes } from 'http-status-codes';

export const joiSchema = joi.object().keys({
  code: joi.number().example(StatusCodes.BAD_REQUEST),
  message: joi.string().example('Bad Request'),
});

const badRequestScheme = j2s(joiSchema).swagger;

export default badRequestScheme;
