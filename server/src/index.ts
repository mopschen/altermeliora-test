import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';

import { errorHandler } from './middlewares/error-handler';
import { courseListRouter } from './routes/course-list';
import { createCourseRouter } from './routes/create-course';
import { deleteCourseRouter } from './routes/delete-course';
import { NotFoundError } from './errors/not-found-error';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(courseListRouter);
app.use(createCourseRouter);
app.use(deleteCourseRouter);
app.all('*', async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

const start = async () => {
  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000`);
  });
};

start();
