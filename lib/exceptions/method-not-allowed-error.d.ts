import { HttpGenericError } from './http-generic-error';
export declare class MethodNotAllowed extends HttpGenericError {
    constructor(message?: string, data?: any | string);
}
