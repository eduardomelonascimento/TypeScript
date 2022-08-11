import { body, ValidationChain } from "express-validator";

export default function validateMovie(): ValidationChain[] {
  return [
    body("title")
      .isString()
      .withMessage("Movie title is required")
      .isLength({ min: 5 })
      .withMessage("Movie title is too short")
      .isLength({ max: 20 })
      .withMessage("Movie title is too long"),
    body("rating")
      .isNumeric()
      .withMessage("Movie rating is required and needs to be a number")
      .custom((rating: number) => {
        if (rating < 0 || rating > 5) {
          throw new Error("Movie rating needs to be between 0 and 5");
        }
        return true;
      }),
    body("description")
      .isString()
      .withMessage("Movie description is required")
      .isLength({ min: 15 })
      .withMessage("Movie description is too short"),
    body("directors").isArray().withMessage("Movie director are required"),
    body("poster").isURL().withMessage("Movie poster needs to be an URL"),
  ];
}
