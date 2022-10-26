import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class UnauthorizedError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.UNAUTHORIZED, message ?? HttpStatusCode.parse(HttpStatusCode.UNAUTHORIZED), data);
    }
}
