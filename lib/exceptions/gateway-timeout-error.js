"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayTimeoutError = void 0;
const status_codes_1 = require("../status-codes");
const http_generic_error_1 = require("./http-generic-error");
class GatewayTimeoutError extends http_generic_error_1.HttpGenericError {
    constructor(message, data) {
        super(status_codes_1.HttpStatusCode.GATEWAY_TIMEOUT, message !== null && message !== void 0 ? message : status_codes_1.HttpStatusCode.parse(status_codes_1.HttpStatusCode.GATEWAY_TIMEOUT), data);
    }
}
exports.GatewayTimeoutError = GatewayTimeoutError;
