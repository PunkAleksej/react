import { useSelector, useDispatch } from 'react-redux';


const selectA = state => state.todoState.todos
const selectB = state => state.todoState.filter
console.log(selectA)

const selectABC = createSelector([selectA, selectB], (a, b, c) => {



})






export const sortedTodoTask = (taskDataList, sortPriority) => {




  const sortedList = [];
  console.log(sortedList)
  if (sortPriority) {
    taskDataList.forEach(element => {
      if (element.active === true) {
        sortedList.push(element)
      } 
    });
    /*
    taskDataList.forEach(element => {
      if (element.active === false) {
        sortedList.push(element)
      } 
    });
    */
  } else {
  
    taskDataList.forEach(element => {
      if (element.active === false) {
        sortedList.push(element)
      } 
    });
    /*
    taskDataList.forEach(element => {
      if (element.active === true) {
        sortedList.push(element)
      } 
    });
    */
  }
  return sortedList
}