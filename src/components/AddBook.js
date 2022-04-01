import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Addbook = () => {
  const tempCats = ['Action', 'Science Fiction', 'Economy', 'Other'];
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Category');

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const newBook = {
      id: v4(), title, author, category,
    };
    if (title !== '' && author !== '' && category !== 'Category') {
      dispatch(addBook(newBook));
    }
    setTitle('');
    setAuthor('');
    setCategory('Category');
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleClick}>

        <input type="text" placeholder="Book Title" value={title} onChange={({ target }) => setTitle(target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={({ target }) => setAuthor(target.value)} required />

        <select id="category" name="category" defaultValue={category} onChange={({ target }) => setCategory(target.value)} required>
          <option value={category} disabled>Category</option>
          {tempCats.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <button type="submit">Add Book</button>

      </form>
    </div>
  );
};
export default Addbook;
