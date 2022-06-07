export const TASK_ADD_TASK  = 'TASK/ADD_TASK';
export const TASK_DELETE = 'TASK/DELETE';
export const TASK_GET_LIST = 'TASK/GET_LIST'

export const addTask = (task) => {
  return {
    task,
    type: TASK_ADD_TASK,
  };
};

export const deleteTask= (key) => {
  return {
    key,
    type: TASK_DELETE,
  };
};

export const getTask = () {
  
}