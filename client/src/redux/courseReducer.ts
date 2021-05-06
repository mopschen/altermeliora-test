import { createReducer } from './createReducer';

import {
  ICourseState,
  fetchListOfCoursesSuccessActionType,
  fetchListOfCoursesFailureActionType,
  deleteCoursesSuccessActionType,
  deleteCoursesFailureActionType,
  createCourseSuccessActionType,
  createCourseFailureActionType,
} from './types';
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  DELETE_COURSES_REQUEST,
  DELETE_COURSES_SUCCESS,
  DELETE_COURSES_FAILURE,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
} from './actionTypes';

const initialState: ICourseState = {
  loading: false,
  courses: [],
  errors: [],
};

export const reducer = createReducer<ICourseState>(initialState, {
  [FETCH_COURSES_REQUEST]: (state: ICourseState): ICourseState => {
    return {
      ...state,
      loading: true,
    };
  },
  [FETCH_COURSES_SUCCESS]: (
    state: ICourseState,
    action: fetchListOfCoursesSuccessActionType
  ): ICourseState => {
    return {
      ...state,
      courses: [...action.payload],
      loading: false,
    };
  },
  [FETCH_COURSES_FAILURE]: (
    state: ICourseState,
    action: fetchListOfCoursesFailureActionType
  ): ICourseState => {
    return {
      ...state,
      loading: false,
      errors: action.payload,
    };
  },

  [DELETE_COURSES_REQUEST]: (state: ICourseState): ICourseState => {
    return {
      ...state,
      loading: true,
    };
  },
  [DELETE_COURSES_SUCCESS]: (
    state: ICourseState,
    action: deleteCoursesSuccessActionType
  ): ICourseState => {
    return {
      ...state,
      courses: [...action.payload],
      loading: false,
    };
  },
  [DELETE_COURSES_FAILURE]: (
    state: ICourseState,
    action: deleteCoursesFailureActionType
  ): ICourseState => {
    return {
      ...state,
      loading: false,
      errors: action.payload,
    };
  },

  [CREATE_COURSE_REQUEST]: (state: ICourseState): ICourseState => {
    return {
      ...state,
      loading: true,
    };
  },
  [CREATE_COURSE_SUCCESS]: (
    state: ICourseState,
    action: createCourseSuccessActionType
  ): ICourseState => {
    return {
      ...state,
      courses: [...state.courses, action.payload],
      loading: false,
    };
  },
  [DELETE_COURSES_FAILURE]: (
    state: ICourseState,
    action: createCourseFailureActionType
  ): ICourseState => {
    return {
      ...state,
      loading: false,
      errors: action.payload,
    };
  },
});

export { reducer as courseReducer };
