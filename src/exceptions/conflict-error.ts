import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class ConflictError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.CONFLICT, message ?? HttpStatusCode.parse(HttpStatusCode.CONFLICT), data);
    }
}
