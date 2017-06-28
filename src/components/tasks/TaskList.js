import React, {PropTypes} from 'react';
import TaskListRow from './TaskListRow';

const TaskList = ({tasks}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Length</th>
          <th>Category</th>
          <th>Assigned To</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => 
          <TaskListRow key={task.id} task={task} />
        )}
      </tbody>
    </table>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskList;