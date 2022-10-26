import { HttpGenericError } from './http-generic-error';
export declare class ForbidenError extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
