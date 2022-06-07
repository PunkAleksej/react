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