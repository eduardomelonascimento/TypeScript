import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export default function validate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  let errorList: object[] = [];
  if (errors.isEmpty()) {
    return next();
  } else {
    errors.array().map((error) => errorList.push({ [error.param]: error.msg }));
    res.status(422).json({ errors: errorList });
  }
}
