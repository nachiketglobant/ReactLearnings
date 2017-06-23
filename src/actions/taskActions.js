import * as types from './actionTypes';
import taskApi from '../api/TasksApi';

export function loadTasksSuccess(tasks) {
  return {type: types.LOAD_TASKS_SUCCESS, tasks};
}

export function updateTaskSuccess(task) {
  return {type: types.UPDATE_TASK_SUCCESS, task};
}

export function createTaskSuccess(task) {
  return {type: types.CREATE_TASK_SUCCESS, task};
}

export function deleteTaskSuccess(task) {
  return {type: types.DELETE_TASK_SUCCESS, task};
}

export function loadTasks() {
  return function(dispatch) {
      dispatch(loadTasksSuccess(taskApi.getAllTasks()));
  };
}

export function updateTask(task) {
return function(dispatch) {
      dispatch(updateTaskSuccess(taskApi.updateTask(task)));
  };
}

export function createTask(task) {
return function(dispatch) {
      dispatch(createTaskSuccess(taskApi.createTask(task)));
  };
}

export function deleteTask(task) {
  return function(dispatch) {
      dispatch(deleteTaskSuccess(taskApi.deleteTask(task)));
  };
}