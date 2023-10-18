import {ValidationError} from "express-validator";
import {CustomError} from "./custom-error";

export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super();


        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {

        return this.errors.map(e => {
            if (e.type !== 'field') {
                return {message: 'There was an error in the error handling logic. Unexpected error type: ' + e.type}
            }
            return {message: e.msg, field: e.path}
        })


    }
}