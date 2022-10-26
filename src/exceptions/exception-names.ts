import { HttpStatusCode } from '../status-codes';

const ExceptionName = (status: number): string => {
    const error = HttpStatusCode.parse(status);
    if (!error) {
        return `HttpGenericError-${status}`;
    }
    return `${error.toUpperCase().replace(/\s/g, '_')}`;
};

export { ExceptionName };
