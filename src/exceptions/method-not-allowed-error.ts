import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class MethodNotAllowed extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.METHOD_NOT_ALLOWED, message ?? HttpStatusCode.parse(HttpStatusCode.METHOD_NOT_ALLOWED), data);
    }
}
