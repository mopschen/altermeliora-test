import React from 'react';
import { NewCourseForm } from './NewCourseForm';
import { ListOfCourses } from './ListOfCourses';

import './Layout.scss';

export const Layout = () => {
  return (
    <div className="layout-container">
      <NewCourseForm />
      <ListOfCourses />
    </div>
  );
};
