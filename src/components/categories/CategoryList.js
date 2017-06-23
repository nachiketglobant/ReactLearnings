import React, {PropTypes} from 'react';
import CategoryListRow from './CategoryListRow';

const CategoryList = ({categories}) => {
  return (
    <div>
      <h3>Categories</h3>
      <table className="table">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => 
            <CategoryListRow key={category.id} category={category} />
          )}
        </tbody>
      </table>
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoryList;