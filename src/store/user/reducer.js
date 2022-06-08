import {
  TASK_ADD_TASK,
  TASK_DELETE,
  TASK_COMPLETE,
  FILTER_SORT_PRIORITY
} from './actions';

const initialState = {
  todos: [],
  filter: 'All',
}


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

  switch (action.type) {
    case TASK_ADD_TASK: {
      return {
        ...state,
        todos: [
          ...state.todos,
          createTodoTask(action.text)
        ]
      }
    }
    case TASK_DELETE:
      const updatedState = state.todos.filter(i => i.key !== action.key)
      return {
        ...state,
        todos: updatedState
      }
    case TASK_COMPLETE:
      

      const updatedTodoList = state.todos.map((item) => {
        if (item.key !== action.key) {
          return item;
        }
        return {
          ...item,
          active: false
        }
      })
      
      return {
        ...state,
        todos: updatedTodoList
      }



    case FILTER_SORT_PRIORITY:
      return {
        ...state,
        filter: action.priority
      }

    default:
      return state;
  }
};

export default reducer;