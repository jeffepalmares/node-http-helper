import { HttpStatusCode } from '../status-codes';
import { HttpGenericError } from './http-generic-error';

export class GatewayTimeoutError extends HttpGenericError {
    constructor(message?: string, data?: any | string) {
        super(HttpStatusCode.GATEWAY_TIMEOUT, message ?? HttpStatusCode.parse(HttpStatusCode.GATEWAY_TIMEOUT), data);
    }
}
