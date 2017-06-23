import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskList from './TaskList';
import NewTaskPage from './NewTaskPage';

class TasksPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

mapCategoryToTask(tasks, categories){
  tasks.map(task => task.category = 
    categories.filter(cat => cat.id == task.category_ids[0])[0].description
  );
};

  render() {
    const tasks = this.props.tasks;
    const categories = this.props.categories;
    
    this.mapCategoryToTask(tasks, categories);
    return (
      <div className="col-md-12">
        <h1>Tasks</h1>
        <div className="col-md-12">
          <TaskList tasks={tasks} />
        </div>
        <div className="col-md-12">
          {this.props.children}
        </div>
        <Link className="col-md-12" to={'/tasks/new'} className="btn btn-primary">Add New Task</Link>
      </div>
    );
  }
}

TasksPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    tasks: state.tasks,
    categories: state.categories
  };
}

export default connect(mapStateToProps)(TasksPage);