import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class BadGatewayError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.BAD_GATEWAY, message ?? HttpStatusCode.parse(HttpStatusCode.BAD_GATEWAY), data);
    }
}
