export const TASK_ADD_TASK  = 'TASK/ADD_TASK';
export const TASK_DELETE = 'TASK/DELETE';
export const TASK_COMPLETE = 'TASK/COMPLETE';
export const FILTER_SORT_PRIORITY = 'FILTER/SORT_PRIORITY';

export const addTask = (text) => {
  return {
    text,
    type: TASK_ADD_TASK,
  };
};

export const deleteTask= (key) => {
  return {
    key,
    type: TASK_DELETE,
  };
};

export const completeTask = (key) => {
  return {
    key,
    type: TASK_COMPLETE
  }
}


export const sortPriority = (priority) => {
  return {
    priority,
    type: FILTER_SORT_PRIORITY
  }
}


