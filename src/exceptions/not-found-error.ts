import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class NotFoundError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.NOT_FOUND, message ?? HttpStatusCode.parse(HttpStatusCode.NOT_FOUND), data);
    }
}
