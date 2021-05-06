import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCourse } from '../redux/actions';

import './NewCourseForm.scss';

export const NewCourseForm = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!title) {
      return;
    }
    dispatch(createCourse(title));
    setTitle('');
  };

  return (
    <div className="course-form">
      <input
        className="course-form__input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="course-form__button"
        onClick={handleClick}
        disabled={!title ? true : false}
      >
        add
      </button>
    </div>
  );
};
