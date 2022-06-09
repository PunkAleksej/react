import { createSelector } from '@reduxjs/toolkit';

const selectTodoList = state => state.todoState.todos;

function headerButtonCounter (taskDataList) {

  let active = 0;
  let complete = 0;
  taskDataList.forEach(element => {
    element.active? active++: complete++
  });
  let all = active + complete
  return {ALL: all, ACTIVE: active, COMPLETE: complete}
}

export const selectHeaderCounter = createSelector(
  selectTodoList,
  headerButtonCounter
)