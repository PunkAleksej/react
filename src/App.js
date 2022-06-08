import styles from  './styles/AddNewTask.module.css';
import AddNewTask from './components/AddNewTask.js';
import List from './components/List.js';
import Header from './components/Header.js';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {


  return (
      <div className={styles.container}>
        <Header  />
        <AddNewTask />
        <List />
      </div>
  );
}

export default App;









  /*
  const [headerInfo, setHeaderInfo] = useState('all');

  console.log(store)

  const listSort = (sortPriority) => {
    setHeaderInfo(sortPriority)
  }

  const [taskDataList, setTaskDataList] = useState([]);

  const completeTodo = (key) => {


    const updatedTodoList = taskDataList.map((item) => {
      if (item.key !== key) {
        return item;
      }
      return {
        ...item,
        active: false
      }
    })
    

    setTaskDataList(updatedTodoList)
  }


  const deleteTodo = (key) => {

    dispatch(
      deleteTask(key)
      )
    
    
    deleteTodo(key)
    const updatedTodoList = taskDataList.filter(i => i.key !== key)
    setTaskDataList(updatedTodoList)
  }


  const createTodo = (text) => {
    
    if (!(text.trim())) return;
    // const newTask = createTodoTask(text)
    // setTaskDataList([...taskDataList, newTask])
    dispatch(addTask(text));
  }
*/

