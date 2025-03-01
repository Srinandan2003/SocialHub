import { body, validationResult } from "express-validator";


/**
 * Validate Category Input
 */

export const validateCategory = [
    body("name").notEmpty().withMessage("Category name is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


/**
 * Validate Comment Input
 */

export const validateComment = [
    body("text").notEmpty().withMessage("Comment text is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

