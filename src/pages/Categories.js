import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);
  console.log(categories);
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
      <h3>{categories}</h3>

    </div>

  );
};
export default Categories;
