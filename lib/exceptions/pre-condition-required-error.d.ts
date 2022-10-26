import { HttpGenericError } from './http-generic-error';
export declare class PreConditionRequiredError extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
