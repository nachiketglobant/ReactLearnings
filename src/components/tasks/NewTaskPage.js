import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/taskActions';
import TaskForm from './TaskForm';


class NewTaskPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      task: {id : 4, description: '', length: '', assignedto: '', category_ids : [] },
      saving: false
    };
    this.redirect = this.redirect.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.updateTaskCategories = this.updateTaskCategories.bind(this);
    this.updateTaskState = this.updateTaskState.bind(this);
  }

  updateTaskCategories(event) {
    const task = this.state.task;
    const categoryId = event.target.value;
    this.props.checkBoxCategories.map(category => category.checked = false);
    const category = this.props.checkBoxCategories.filter(category => category.id == categoryId)[0];
    category['checked'] = true;
    task.category_ids = [];
    task.category_ids.push(category.id);
    this.setState({task: task});
  }

  updateTaskState(event) {
    const field = event.target.name;
    const task = this.state.task;
    task[field] = event.target.value;
    return this.setState({task: task});
  }

  redirect() {
    browserHistory.push(`/tasks`);
  }

  saveTask(event) {
    event.preventDefault();
    this.props.actions.createTask(this.state.task);
    this.redirect();
  }
  
  render() {
    return (
      <div>
        <h1>new task</h1>
        <TaskForm 
          task={this.state.task} 
          categories={this.props.checkBoxCategories}
          onSave={this.saveTask}
          onChange={this.updateTaskState}
          onCategoryChange={this.updateTaskCategories}/>
      </div>
    );
  }
}

function categoriesForCheckBoxes(categories) {
  return categories.map(category => {
    category['checked'] = false;
    return category;
  });
}

NewTaskPage.propTypes = {
  checkBoxCategories: PropTypes.array.isRequired, 
  actions: PropTypes.object.isRequired
};



function mapStateToProps(state, ownProps) {
  let checkBoxCategories = [];
  if (state.categories.length > 0) {
    checkBoxCategories = categoriesForCheckBoxes(Object.assign([], state.categories));
  }

  return {
    checkBoxCategories: checkBoxCategories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTaskPage);





