import { HttpGenericError } from './http-generic-error';
export declare class UnauthorizedError extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
