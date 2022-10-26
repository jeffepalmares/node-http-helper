import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class InternalServerError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.INTERNAL_SERVER_ERROR, message ?? HttpStatusCode.parse(HttpStatusCode.INTERNAL_SERVER_ERROR), data);
    }
}
