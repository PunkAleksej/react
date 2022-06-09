
import { createSelector } from 'reselect'

function sortedList (todos, filter) {
  if (filter === 'COMPLETE') {
    return todos.filter(i => !i.active)
  }
  if (filter  === 'ACTIVE') {
    return todos.filter(i => i.active)
  }
  if (filter  === 'ALL') {
    return todos
  }

}

const selectFilter = state => state.todoState.filter
const selectTodos = state => state.todoState.todos;

export const selectSort = createSelector(
  selectTodos,
  selectFilter,
  sortedList
)