/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpStatusCode } from '../status-codes';
import { ExceptionName } from './exception-names';

export class HttpGenericError extends Error {
    statusCode: number;

    data: unknown;

    response: unknown;

    constructor(statusCode: number, message?: string, data?: any) {
        super(message ?? HttpStatusCode.parse(statusCode));
        this.name = ExceptionName(statusCode);
        this.statusCode = statusCode;
        this.message = message;
        this.response = data && typeof data === 'object' ? data.response : null;
        this.data = data;
        Error.call(this);
        Error.captureStackTrace(this, this.constructor);
    }
    toString() {
        return `${this.name} :: ${this.statusCode} :: `;
    }
}
