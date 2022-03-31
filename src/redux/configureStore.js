import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
