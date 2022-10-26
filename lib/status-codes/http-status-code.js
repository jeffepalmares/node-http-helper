"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
const http = require("http");
const status_code_enum_1 = require("./status-code-enum");
const HttpStatusCode = Object.assign(Object.assign({}, status_code_enum_1.HttpStatusCodes), { parse: (status) => http.STATUS_CODES[status] });
exports.HttpStatusCode = HttpStatusCode;
