import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';
import {RequestValidationError} from "../errors/request-validation-error";
import {DatabaseConnectionError} from "../errors/database-connection-error";
import e from "express";


const router = express.Router();


router.post('/api/users/signup', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage("passwod must be 4-20 chars")
], (req: Request, res: Response) => {
    const errors = validationResult(req);
e
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }

    console.log('Creating a user');
    throw new DatabaseConnectionError();
    res.send({});
});

export {router as signupRouter};
