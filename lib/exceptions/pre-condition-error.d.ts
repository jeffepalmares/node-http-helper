import { HttpGenericError } from './http-generic-error';
export declare class PreConditionError extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
