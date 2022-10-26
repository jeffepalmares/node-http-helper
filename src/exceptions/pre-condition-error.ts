import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class PreConditionError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.PRECONDITION_FAILED, message ?? HttpStatusCode.parse(HttpStatusCode.PRECONDITION_FAILED), data);
    }
}
