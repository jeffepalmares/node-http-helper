"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpGenericError = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const status_codes_1 = require("../status-codes");
const exception_names_1 = require("./exception-names");
class HttpGenericError extends Error {
    constructor(statusCode, message, data) {
        super(message !== null && message !== void 0 ? message : status_codes_1.HttpStatusCode.parse(statusCode));
        this.name = (0, exception_names_1.ExceptionName)(statusCode);
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
exports.HttpGenericError = HttpGenericError;
