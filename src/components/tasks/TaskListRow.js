import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TaskPage from './TaskPage';

const TaskListRow = ({task}) => {
  return (
    <tr>
      <td>{task.description}</td>
      <td>{task.length}</td>
      <td>{task.category}</td>
      <td>{task.assignedto}</td>
      <td><Link to={'/tasks/' + task.id}>Select</Link></td>
    </tr>
  );
};

TaskListRow.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskListRow;
