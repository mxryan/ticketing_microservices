import {NextFunction, Request, Response} from "express";
import {CustomError} from "../errors/custom-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("error handler! ")
    console.log("error: ", err);
    console.log("error msg: ", err.message);
    console.log("typeof error: ", typeof err);
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({errors: err.serializeErrors()});
    }

    let foo
    console.error("Unexpected error");
    console.error(err);

    res.status(500).send({
        errors: [{message: 'Unexpected error'}]
    });
}