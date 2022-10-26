import { HttpGenericError } from './http-generic-error';
export declare class InternalServerError extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
