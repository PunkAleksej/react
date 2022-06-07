import React from 'react';
import Task from './Task';



function List(props) {
  const { value, deleteTodo, completeTodo, headerInfo }  = props;
  let updatedTodoList


  if (headerInfo === 'complete') {
    updatedTodoList = value.filter(i => i.active === false)
  }
  if (headerInfo === 'active') {
    updatedTodoList = value.filter(i => i.active === true)
  }
  if (headerInfo === 'all') {
    updatedTodoList = value
  }

  return (
    <div>
      {updatedTodoList.map((todo) => {
        return <Task key={todo.id} 
        value={todo} 
        deleteTodo={deleteTodo} 
        completeTodo={completeTodo}/>
      })
      }
    </div>

  )
}


export default List;