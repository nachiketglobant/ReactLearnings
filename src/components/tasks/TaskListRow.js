import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TaskPage from './TaskPage';

const TaskListRow = ({task}) => {
  return (
    <tr>
      <td><Link to={'/tasks/' + task.id}>{task.description}</Link></td>
      <td><Link to={'/tasks/' + task.id}>{task.length}</Link></td>
      <td><Link to={'/tasks/' + task.id}>{task.category}</Link></td>
      <td><Link to={'/tasks/' + task.id}>{task.assignedto}</Link></td>
    </tr>
  );
};

TaskListRow.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskListRow;
