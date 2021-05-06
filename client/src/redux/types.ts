import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  DELETE_COURSES_REQUEST,
  DELETE_COURSES_SUCCESS,
  DELETE_COURSES_FAILURE,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAILURE,
} from './actionTypes';

export interface ICourse {
  id: string;
  title: string;
  startTime: string;
}

export interface ICourseState {
  loading: boolean;
  courses: ICourse[];
  errors: IError[];
}

export interface IError {
  message: string;
  field?: string;
}

export interface fetchListOfCoursesRequestActionType {
  type: typeof FETCH_COURSES_REQUEST;
}
export interface fetchListOfCoursesSuccessActionType {
  type: typeof FETCH_COURSES_SUCCESS;
  payload: ICourse[];
}
export interface fetchListOfCoursesFailureActionType {
  type: typeof FETCH_COURSES_FAILURE;
  payload: IError[];
}

export interface deleteCoursesRequestActionType {
  type: typeof DELETE_COURSES_REQUEST;
}
export interface deleteCoursesSuccessActionType {
  type: typeof DELETE_COURSES_SUCCESS;
  payload: ICourse[];
}
export interface deleteCoursesFailureActionType {
  type: typeof DELETE_COURSES_FAILURE;
  payload: IError[];
}

export interface createCourseRequestActionType {
  type: typeof CREATE_COURSE_REQUEST;
}
export interface createCourseSuccessActionType {
  type: typeof CREATE_COURSE_SUCCESS;
  payload: ICourse;
}
export interface createCourseFailureActionType {
  type: typeof CREATE_COURSE_FAILURE;
  payload: IError[];
}

export type ActionTypesInterfaces =
  | fetchListOfCoursesRequestActionType
  | fetchListOfCoursesSuccessActionType
  | fetchListOfCoursesFailureActionType
  | deleteCoursesRequestActionType
  | deleteCoursesSuccessActionType
  | deleteCoursesFailureActionType
  | createCourseRequestActionType
  | createCourseSuccessActionType
  | createCourseFailureActionType;
