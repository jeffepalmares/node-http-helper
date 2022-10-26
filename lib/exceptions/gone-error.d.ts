import { HttpGenericError } from './http-generic-error';
export declare class GoneError extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
