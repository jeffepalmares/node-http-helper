"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const status_codes_1 = require("../status-codes");
const http_generic_error_1 = require("./http-generic-error");
class BadRequestError extends http_generic_error_1.HttpGenericError {
    constructor(message, data) {
        super(status_codes_1.HttpStatusCode.BAD_REQUEST, message !== null && message !== void 0 ? message : status_codes_1.HttpStatusCode.parse(status_codes_1.HttpStatusCode.BAD_REQUEST), data);
    }
}
exports.BadRequestError = BadRequestError;
