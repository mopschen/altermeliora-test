import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { courseReducer } from './courseReducer';

const reducer = combineReducers({
  course: courseReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
