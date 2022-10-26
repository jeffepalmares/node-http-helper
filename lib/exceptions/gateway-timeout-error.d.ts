import { HttpGenericError } from './http-generic-error';
export declare class GatewayTimeoutError extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
