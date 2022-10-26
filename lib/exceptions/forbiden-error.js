"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbidenError = void 0;
const status_codes_1 = require("../status-codes");
const http_generic_error_1 = require("./http-generic-error");
class ForbidenError extends http_generic_error_1.HttpGenericError {
    constructor(message, data) {
        super(status_codes_1.HttpStatusCode.FORBIDDEN, message !== null && message !== void 0 ? message : status_codes_1.HttpStatusCode.parse(status_codes_1.HttpStatusCode.FORBIDDEN), data);
    }
}
exports.ForbidenError = ForbidenError;
