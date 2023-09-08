import joi from 'joi';
import j2s from 'joi-to-swagger';

export const joiSchema = joi.object().keys({
  code: joi.number().example(401),
  message: joi.string().example('The user credentials were incorrect'),
});

const invalidCredentialsScheme = j2s(joiSchema).swagger;

export default invalidCredentialsScheme;
