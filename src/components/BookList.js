import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((store) => store.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks()); }, [dispatch]);

  return (
    <div>
      <ul>
        {books.map((book) => {
          console.log(book);
          const {
            id, title, author, category,
          } = book;
          return (
            <Book
              key={id}
              {...{
                id, title, author, category,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Booklist;
