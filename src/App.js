import './components/App.css';
import Add from './components/Add.js';
import List from './components/List.js';
import Header from './components/Header.js';
import React, { useState } from 'react';
import { createTodoTask } from './utils/taskCreator';
import { store } from './store/store';
import { completeTodoTask } from './utils/taskComplete';
import { sortedTodoTask } from './utils/sortedTodoTask';

function App() {
  const [headerInfo, setHeaderInfo] = useState('all');
  const [taskDataList, setTaskDataList] = useState([]);





  const listSort = (sortPriority) => {
    setHeaderInfo(sortPriority)

    //const sortedList = sortedTodoTask(taskDataList, sortPriority)
    //setTaskDataList([...sortedList])
  }

  const completeTodo = (key) => {
    // const completeTarget = completeTodoTask(taskDataList, key)
    // taskDataList[completeTarget].active = false;

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
    // const deleteTarget = deleteTodoTask(taskDataList, key)
    // taskDataList.splice(deleteTarget, 1)
    const updatedTodoList = taskDataList.filter(i => i.key !== key)
    setTaskDataList(updatedTodoList)
  }

  const createTodo = (text) => {
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
