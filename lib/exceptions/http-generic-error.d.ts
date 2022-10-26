export declare class HttpGenericError extends Error {
    statusCode: number;
    data: unknown;
    response: unknown;
    constructor(statusCode: number, message?: string, data?: any);
    toString(): string;
}
