import * as types from './actionTypes';
import categoryApi from '../api/CategoryApi';

export function loadCategoriesSuccess(categories) {
  return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

// export function createCourseSuccess(course) {
//   return {type: types.CREATE_COURSE_SUCCESS, course}
// }

// export function updateCourseSuccess(course) {
//   return {type: types.UPDATE_COURSE_SUCCESS, course}
// }

// export function deleteCourseSuccess(course) {
//   return {type: types.DELETE_COURSE_SUCCESS, course}
// }

export function loadCategories() {
  return function(dispatch) {
      dispatch(loadCategoriesSuccess(categoryApi.getAllCategories()));
    };
}
