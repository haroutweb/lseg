import { VALIDATION_ERROR } from '../utils/responseCodes';
import { BadRequestException } from './bad-request-exception';

export class ValidationException extends BadRequestException {
  constructor(msg = VALIDATION_ERROR.message) {
    super(msg, VALIDATION_ERROR.code);
  }
}
