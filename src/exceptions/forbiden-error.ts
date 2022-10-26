import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class ForbidenError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.FORBIDDEN, message ?? HttpStatusCode.parse(HttpStatusCode.FORBIDDEN), data);
    }
}
