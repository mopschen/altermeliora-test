import { Dispatch } from 'redux';
import axios from 'axios';
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
import {
  ICourse,
  fetchListOfCoursesSuccessActionType,
  fetchListOfCoursesRequestActionType,
  fetchListOfCoursesFailureActionType,
  deleteCoursesRequestActionType,
  IError,
  deleteCoursesSuccessActionType,
  deleteCoursesFailureActionType,
  createCourseRequestActionType,
  createCourseSuccessActionType,
  createCourseFailureActionType,
} from './types';

const fetchListOfCoursesRequest = (): fetchListOfCoursesRequestActionType => ({
  type: FETCH_COURSES_REQUEST,
});
const fetchListOfCoursesSuccess = (
  data: ICourse[]
): fetchListOfCoursesSuccessActionType => ({
  type: FETCH_COURSES_SUCCESS,
  payload: data,
});
const fetchListOfCoursesFailure = (
  errors: IError[]
): fetchListOfCoursesFailureActionType => ({
  type: FETCH_COURSES_FAILURE,
  payload: errors,
});
export const fetchListOfCourses = () => async (dispatch: Dispatch) => {
  dispatch(fetchListOfCoursesRequest());
  try {
    const res = await axios.get('http://localhost:4000/api/courses');
    dispatch(fetchListOfCoursesSuccess(res.data));
  } catch (err) {
    dispatch(fetchListOfCoursesFailure(err.response.data.errors));
  }
};

const deleteCoursesRequest = (): deleteCoursesRequestActionType => ({
  type: DELETE_COURSES_REQUEST,
});
const deleteCoursesSuccess = (
  data: ICourse[]
): deleteCoursesSuccessActionType => ({
  type: DELETE_COURSES_SUCCESS,
  payload: data,
});
const deleteCoursesFailure = (
  errors: IError[]
): deleteCoursesFailureActionType => ({
  type: DELETE_COURSES_FAILURE,
  payload: errors,
});
export const deleteCourses = (ids: string[]) => async (dispatch: Dispatch) => {
  dispatch(deleteCoursesRequest());
  try {
    const res = await axios.delete('http://localhost:4000/api/courses', {
      data: {
        ids,
      },
    });
    dispatch(deleteCoursesSuccess(res.data));
  } catch (err) {
    dispatch(deleteCoursesFailure(err.response.data.errors));
  }
};

const createCourseRequest = (): createCourseRequestActionType => ({
  type: CREATE_COURSE_REQUEST,
});
const createCourseSuccess = (data: ICourse): createCourseSuccessActionType => ({
  type: CREATE_COURSE_SUCCESS,
  payload: data,
});
const createCourseFailure = (
  errors: IError[]
): createCourseFailureActionType => ({
  type: CREATE_COURSE_FAILURE,
  payload: errors,
});
export const createCourse = (title: string) => async (dispatch: Dispatch) => {
  dispatch(createCourseRequest());
  try {
    const res = await axios.post('http://localhost:4000/api/courses', {
      title,
    });
    dispatch(createCourseSuccess(res.data));
  } catch (err) {
    dispatch(createCourseFailure(err.response.data.errors));
  }
};
