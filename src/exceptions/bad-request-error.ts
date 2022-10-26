import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class BadRequestError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.BAD_REQUEST, message ?? HttpStatusCode.parse(HttpStatusCode.BAD_REQUEST), data);
    }
}
