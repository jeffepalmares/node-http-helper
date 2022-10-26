import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class PreConditionRequiredError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.PRECONDITION_REQUIRED, message ?? HttpStatusCode.parse(HttpStatusCode.PRECONDITION_REQUIRED), data);
    }
}
