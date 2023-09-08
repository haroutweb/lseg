import joi from 'joi';
import j2s from 'joi-to-swagger';

export const joiSchema = joi.object().keys({
  code: joi.number().example(403),
  message: joi.string().example('Permission Denied'),
});

const permissionDeniedScheme = j2s(joiSchema).swagger;

export default permissionDeniedScheme;
