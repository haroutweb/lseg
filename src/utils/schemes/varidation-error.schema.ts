import joi from 'joi';
import j2s from 'joi-to-swagger';
import { VALIDATION_ERROR } from '../responseCodes';

export const joiSchema = joi.object().keys({
  code: joi.number().example(VALIDATION_ERROR.code),
  message: joi.string().example(VALIDATION_ERROR.message),
});

const validationErrorScheme = j2s(joiSchema).swagger;

export default validationErrorScheme;
