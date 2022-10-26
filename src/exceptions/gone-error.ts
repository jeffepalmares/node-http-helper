import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class GoneError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.GONE, message ?? HttpStatusCode.parse(HttpStatusCode.GONE), data);
    }
}
