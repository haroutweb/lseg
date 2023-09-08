import { FAILED_TO_SAVE_FILE_ERROR } from '../utils/responseCodes';
import { BadRequestException } from './bad-request-exception';

export class FailedToSaveFileException extends BadRequestException {
  constructor() {
    super(FAILED_TO_SAVE_FILE_ERROR.message, FAILED_TO_SAVE_FILE_ERROR.code);
  }
}
