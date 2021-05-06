import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';
import { deleteCourses } from '../service';

const router = express.Router();

router.delete(
  '/api/courses',
  [
    body('ids').custom((value) => {
      if (!Array.isArray(value)) {
        return Promise.reject('You should pass an array of ids');
      }
      if (value.length === 0) {
        return Promise.reject('Array should contains at least one value');
      }
      return Promise.resolve();
    }),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const restOfCourses = deleteCourses(req.body.ids);
    res.send(restOfCourses);
  }
);

export { router as deleteCourseRouter };
