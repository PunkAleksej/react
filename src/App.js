import './components/App.css';
import Add from './components/Add.js';
import List from './components/List.js';
import Header from './components/Header.js';
import React, { useState, useEffect } from 'react';
import { createTodoTask } from './utils/taskCreator';
import { Provider } from 'react-redux';
import { store } from './store';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './store/user/actions';
import { completeTodoTask } from './utils/taskComplete';
import { sortedTodoTask } from './utils/sortedTodoTask';


function App() {
  const [headerInfo, setHeaderInfo] = useState('all');
  const [taskDataList, setTaskDataList] = useState([]);
  const dispatch = useDispatch()


  console.log(store)

  const listSort = (sortPriority) => {
    setHeaderInfo(sortPriority)
  }

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

    const deleteTodo = (key) => {
      console.log(key)
      dispatch(
        deleteTask({
          key:key,
        })
      )
    } 
    
    deleteTodo(key)


    const updatedTodoList = taskDataList.filter(i => i.key !== key)
    setTaskDataList(updatedTodoList)
  }


  const createTodo = (text) => {
    const addNewTask = (text) => {
      dispatch(
        addTask({
          text: text,
        })
      );
    };
    addNewTask(text)


    if (!(text.trim())) return;
    const newTask = createTodoTask(text)
    setTaskDataList([...taskDataList, newTask])
  }

  return (
      <div className="container">
        <Header taskDataList={taskDataList}
          listSort={listSort} />
        <Add createTodo={createTodo} />
        <List
          value={taskDataList}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          headerInfo={headerInfo}
        />
      </div>
  );
}

export default App;
