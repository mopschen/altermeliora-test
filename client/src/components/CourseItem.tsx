import React from 'react';
import { ICourse } from '../redux/types';

interface CourseItemProps {
  course: ICourse;
  handleToggle: (id: string) => void;
}
export const CourseItem: React.FC<CourseItemProps> = ({
  course,
  handleToggle,
}) => {
  const startTime = new Date(course.startTime);
  const currentTime = new Date();
  const difference = Math.round(
    (startTime.getTime() - currentTime.getTime()) / (1000 * 60)
  );
  return (
    <div className="course-item">
      <input
        type="checkbox"
        className="course-item__checkbox"
        id={course.id}
        onClick={() => handleToggle(course.id)}
      />
      <label className="course-item__label">{`${course.title} - start in ${difference} min`}</label>
    </div>
  );
};
