import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CategoryListRow = ({category}) => {
  return (
    <tr>
      <td>{category.description}</td>
    </tr>
  );
};

CategoryListRow.propTypes = {
  category: PropTypes.object.isRequired
};

export default CategoryListRow;
