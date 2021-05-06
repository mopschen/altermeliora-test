import express, { Request, Response } from 'express';
import { getAllCourses } from '../service';

const router = express.Router();

router.get('/api/courses', async (req: Request, res: Response) => {
  res.send(getAllCourses());
});

export { router as courseListRouter };
