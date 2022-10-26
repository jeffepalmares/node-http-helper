import { HttpGenericError } from './http-generic-error';
export declare class BadGatewayError extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
