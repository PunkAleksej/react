
export const completeTodoTask = (taskDataList, key) => {
  let target;
  taskDataList.forEach(element => {
    if (element.key === key) {
      target = taskDataList.indexOf(element)
    }
  });
  return  target
}