import Exception from './exception';
import moment from 'moment';
import { TOO_MANY_REQUESTS } from '../utils/responseCodes';

export class TooManyRequestsException extends Exception {
  constructor(
    nextValidRequestDate: string | Date | undefined,
    code: number | undefined = TOO_MANY_REQUESTS.code,
  ) {
    const message = 'Try again ' + moment(nextValidRequestDate).fromNow();
    try {
      message;
    } catch {
      // do nothing;
    }

    super(message, code);
  }
}
