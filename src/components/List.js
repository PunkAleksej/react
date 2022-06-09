import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import {selectSort} from '../utils/sortedTodoTask';

function List() {
  const todoState = useSelector(selectSort)
  return (
    <div>
      {todoState.map((todo) => {
        return <Task key={todo.id} 
        value={todo} 
        />
      })
      }
    </div>

  )
}


export default List;