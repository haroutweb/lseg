import joi from 'joi';
import j2s from 'joi-to-swagger';

export const joiSchema = joi.object().keys({
  average: joi.number().example(0.07),
  targetCurrency: joi.string().example('USD'),
  companies: joi.array().items(
    joi.object().keys({
      symbol: joi.string().example('ASX'),
      name: joi.string().example('ASE Technology Holding Co.Ltd'),
      reportDate: joi.string().example('2023-11-02'),
      fiscalDateEnding: joi.string().example('2023-09-30'),
      estimate: joi.number().example(0.1302),
      currency: joi.string().example('TWD'),
    })
  )
});

const GetAverageSchema = j2s(joiSchema).swagger;

export default GetAverageSchema;
