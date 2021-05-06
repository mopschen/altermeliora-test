import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';
import { addNewCourse, findCourseByTitle } from '../service';
import { BadRequestError } from '../errors/bad-request-error';

const router = express.Router();

router.post(
  '/api/courses',
  [body('title').trim().notEmpty().withMessage('Title must be not empty')],
  validateRequest,
  async (req: Request, res: Response) => {
    const existingCourse = findCourseByTitle(req.body.title);
    if (existingCourse) {
      throw new BadRequestError('Course with this name is already created');
    }
    const course = addNewCourse(req.body.title);
    res.send(course);
  }
);

export { router as createCourseRouter };
