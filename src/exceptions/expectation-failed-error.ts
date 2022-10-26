import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class ExpectationFailedError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.EXPECTATION_FAILED, message ?? HttpStatusCode.parse(HttpStatusCode.EXPECTATION_FAILED), data);
    }
}
