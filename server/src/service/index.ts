import crypto from 'crypto';
import { BadRequestError } from '../errors/bad-request-error';
interface ICourse {
  id: string;
  title: string;
  startTime: Date;
}

let data: ICourse[] = [
  {
    id: crypto.randomBytes(8).toString('hex'),
    title: 'course1',
    startTime: new Date(new Date().getTime() + 1000 * 60 * 60),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    title: 'course2',
    startTime: new Date(new Date().getTime() + 1000 * 60 * 30),
  },
];

export const getAllCourses = (): ICourse[] => {
  return data;
};

export const addNewCourse = (title: string): ICourse => {
  const course = {
    id: crypto.randomBytes(8).toString('hex'),
    title,
    startTime: new Date(new Date().getTime() + 1000 * 60 * 60),
  };
  data.push(course);
  return course;
};

export const deleteCourses = (ids: string[]): ICourse[] => {
  ids.forEach((id: string) => {
    const course = data.find((el: ICourse) => el.id === id);
    if (!course) {
      throw new BadRequestError(`There is no course for id: ${id}`);
    }
  });

  data = [
    ...data.filter((el: ICourse) => {
      let courseIsInArray = false;
      ids.forEach((id: string) => {
        if (el.id === id) {
          courseIsInArray = true;
        }
      });
      return !courseIsInArray;
    }),
  ];

  console.log('rest of courses', data);

  return data;
};

export const findCourseByTitle = (title: string): ICourse | undefined => {
  return data.find((el: ICourse) => el.title === title);
};
