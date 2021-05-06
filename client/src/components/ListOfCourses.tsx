import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ICourseState, ICourse } from '../redux/types';
import { fetchListOfCourses, deleteCourses } from '../redux/actions';

import { CourseItem } from './CourseItem';

import './ListOfCourses.scss';

export const ListOfCourses = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const dispatch = useDispatch();
  const courseState = useSelector(
    (state: { course: ICourseState }) => state.course
  );

  const handleToggle = (id: string) => {
    if (selectedCourses.find((courseId: string) => courseId === id)) {
      setSelectedCourses([
        ...selectedCourses.filter((courseId: string) => courseId !== id),
      ]);
    } else {
      setSelectedCourses([...selectedCourses, id]);
    }
  };
  const handleDelete = () => {
    dispatch(deleteCourses(selectedCourses));
    setSelectedCourses([]);
  };

  useEffect(() => {
    dispatch(fetchListOfCourses());
  }, []);

  console.log('state', selectedCourses);
  return (
    <div className="list-of-courses">
      <div className="list-of-courses__list">
        {courseState.courses.map((course: ICourse) => (
          <CourseItem
            key={course.id}
            course={course}
            handleToggle={handleToggle}
          />
        ))}
      </div>
      <button onClick={handleDelete} className="list-of-courses__button">
        delete
      </button>
    </div>
  );
};
