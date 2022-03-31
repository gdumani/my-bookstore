import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'booKStore/books/GET_BOOKS';
const API_ID = 'FN35ZgxeHr1ORapGK8sX';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books/`;

const initialState = [];

export const getBooks = () => async (dispatch) => {
  const response = await axios.get(API_URL).then(
    (apiBooks) => Object.entries(apiBooks.data).map(([id, bk]) => ({ id, ...bk[0] })),
  );
  dispatch({
    type: GET_BOOKS,
    payload: response,
  });
};

export const addBook = (payload) => async (dispatch) => {
  try {
    await axios.post(API_URL, payload);
    dispatch({
      type: ADD_BOOK,
      payload,
    });
  } catch (error) {
    return error;
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await axios.delete(API_URL + id);
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  } catch (error) {
    return error;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state].filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
