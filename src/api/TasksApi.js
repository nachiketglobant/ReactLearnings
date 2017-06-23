var taskJson = [
  { "id": 1, "description": "Explore React", "length": "5 days", "category_ids": [1], "assignedto": "Nachi" },
  { "id": 2, "description": "Browse Redux", "length": "10 days", "category_ids": [2], "assignedto": "Globant" },
  { "id": 3, "description": "Create a sample app", "length": "15 days", "category_ids": [3], "assignedto": "Nova" }
];

class TasksApi {
  static getAllTasks() {
    return taskJson;
  }

  static updateTask(task) {
    return task;
  };

  static createTask(task) {
    taskJson.push({
      "id": task.id,
      "description": task.description,
      "length": task.length,
      "category_ids": task.category_ids,
      "assignedto": task.assignedto
    });
    return taskJson[taskJson.length - 1];
  };

  static deleteTask(task) {
  return task;
  }
}

export default TasksApi;
