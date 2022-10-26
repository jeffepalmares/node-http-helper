import * as http from 'http';
import { HttpStatusCodes } from './status-code-enum';

const HttpStatusCode = {
    ...HttpStatusCodes,
    parse: (status: number) => http.STATUS_CODES[status],
};

export { HttpStatusCode };
