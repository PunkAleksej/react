import React from 'react';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector, filterSelector, sortState} from '../utils/sortedTodoTask'
//import { createSelector } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';


function List() {
  const todoState = useSelector((state) => state.todoState)


  const selectTodos = state => state.todoState.todos
  const selectFilter = state => state.todoState.filter


/*
  if (filter === 'COMPLETE') {
    sortedList =todos.filter(i => i.active === false)
    return sortedList
  }
  if (filter  === 'ACTIVE') {
    sortedList = todos.filter(i => i.active === true)
    return sortedList 
  }
  if (filter  === 'ALL') {
    sortedList = todos
    return sortedList
  }


*/


  return (
    <div>
      {todoState.todos.map((todo) => {
        return <Task key={todo.id} 
        value={todo} 
        />
      })
      }
    </div>

  )
}


export default List;