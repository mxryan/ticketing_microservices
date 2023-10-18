import {CustomError} from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode: number = 404;


    constructor(msg: string = "Route not found") {
        super(msg);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): { message: string; field?: string }[] {
        return [{message: 'Not Found'}];
    }

}