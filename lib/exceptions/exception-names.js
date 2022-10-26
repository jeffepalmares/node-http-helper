"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionName = void 0;
const status_codes_1 = require("../status-codes");
const ExceptionName = (status) => {
    const error = status_codes_1.HttpStatusCode.parse(status);
    if (!error) {
        return `HttpGenericError-${status}`;
    }
    return `${error.toUpperCase().replace(/\s/g, '_')}`;
};
exports.ExceptionName = ExceptionName;
