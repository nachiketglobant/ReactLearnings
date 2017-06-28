import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';
import CategoryList from '../categories/CategoryList';
import TaskForm from './TaskForm';
import {browserHistory} from 'react-router';
// import toastr from 'toastr'; 

class TaskPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      task: Object.assign({}, this.props.task), 
      checkBoxCategories: Object.assign([], [...this.props.checkBoxCategories]),
      saving: false,
      isEditing: false
    };
    this.saveTask = this.saveTask.bind(this);
    this.updateTaskState = this.updateTaskState.bind(this);
    this.updateTaskCategories = this.updateTaskCategories.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.task.id != nextProps.task.id) {
      this.setState({task: Object.assign({}, nextProps.task)});
    }
    this.setState({saving: false, isEditing: false});
  }

  toggleEdit() {
    this.setState({isEditing: true});
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
    browserHistory.push('/tasks');
  }

  saveTask(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.updateTask(this.state.task);
    this.redirect();
  } 

  deleteTask(event) {
    this.props.actions.deleteTask(this.state.task);
  }

  render() {
    if (this.state.isEditing) {
      return (
      <div>
        <h1>edit task</h1>
        <TaskForm 
          task={this.state.task} 
          categories={this.state.checkBoxCategories}
          onSave={this.saveTask} 
          onChange={this.updateTaskState} 
          onCategoryChange={this.updateTaskCategories}
          saving={this.state.saving}/> 
      </div>
      );
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.task.description}</h1>
        <p>Length: {this.state.task.length}</p>
        <p>Assigned to: {this.state.task.assignedto}</p>
        <p>Category: {this.state.task.category}</p>
        <button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
        <button onClick={this.deleteTask} className="btn btn-default  ">delete</button>
      </div>
    );
  }
}


function getCatById(tasks, id) {
  let task = tasks.find(task => task.id == id);
  return Object.assign({}, task);
}

function categoriesForCheckBoxes(categories, task=null) {
  return categories.map(category => {
    if (task && task.category_ids.filter(categoryId => categoryId == category.id).length > 0) {
      category['checked'] = true;
    } else {
      category['checked'] = false;
    }
    return category;
  });
}

function mapStateToProps(state, ownProps) {
  const stateCategories = Object.assign([], state.categories);
  let checkBoxCategories = [];
  let task = {id: '', description: '', category: '', assignedto: '', length : '', category_ids: [] };
  const catId = ownProps.params.id;
  if (catId && state.tasks.length > 0 && state.categories.length > 0) 
  {
    task = getCatById(state.tasks, ownProps.params.id);
    if (task.id && task.category_ids.length 
    > 0
    ) {
      checkBoxCategories = categoriesForCheckBoxes(stateCategories, task);
    } else {
      checkBoxCategories = categoriesForCheckBoxes(stateCategories);
    }
  } 
    return {task: task, checkBoxCategories: checkBoxCategories};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  };
}

TaskPage.propTypes = {
  task: PropTypes.object.isRequired,
  checkBoxCategories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);