export interface IHttpResponse {
  code: number;
  message: string;
}

/**
 * status codes
 */
export const VALIDATION_ERROR: IHttpResponse = { code: 601, message: 'Validation Error: cur/targetCur parameters not defined' };
export const FAILED_TO_SAVE_FILE_ERROR: IHttpResponse = { code: 602, message: 'File not saved' };
export const TOO_MANY_REQUESTS: IHttpResponse = {
  code: 622,
  message: 'Too many requests',
};

/**
 * Convert the numeric status code to its appropriate title.
 * @param statusCode One of the available status codes in this package
 * @returns {String} The associated title of the passed status code
 */
export declare function getStatusText(statusCode: number): string;
