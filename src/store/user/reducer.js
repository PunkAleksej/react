import {
  TASK_ADD_TASK,
  TASK_DELETE,
  TASK_GET_LIST,
  } from './actions';

const initialState = []


let id = 1;
const createTodoTask = (text) => {
  return {
    key: Math.floor(Math.random() * (1000000 - 1) + 1),
    text,
    id: id++,
    active: true
  }
}


const reducer = (state = initialState, action) => {

  switch (action.type){
    case TASK_ADD_TASK: {
      let text = action.task.text
      console.log(state)
      return [
        ...state,
        createTodoTask(text)
      ]
    }
    case TASK_DELETE:
      let key = action.key.key
      console.log(key)
      const updatedState = state.filter(i => i.key !== key)
      return [
        ...updatedState
      ]
    case TASK_GET_LIST: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
