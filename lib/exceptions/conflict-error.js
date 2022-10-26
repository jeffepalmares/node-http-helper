"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
const status_codes_1 = require("../status-codes");
const http_generic_error_1 = require("./http-generic-error");
class ConflictError extends http_generic_error_1.HttpGenericError {
    constructor(message, data) {
        super(status_codes_1.HttpStatusCode.CONFLICT, message !== null && message !== void 0 ? message : status_codes_1.HttpStatusCode.parse(status_codes_1.HttpStatusCode.CONFLICT), data);
    }
}
exports.ConflictError = ConflictError;
