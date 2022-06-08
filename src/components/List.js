import React from 'react';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';




function List() {
  const todoState = useSelector((state) => state.todoState)



/*
  if (headerInfo === 'complete') {
    updatedTodoList = value.filter(i => i.active === false)
  }
  if (headerInfo === 'active') {
    updatedTodoList = value.filter(i => i.active === true)
  }
  if (headerInfo === 'all') {
    updatedTodoList = value
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