import React, { useState } from 'react';
import { store } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/user/actions';



const Add = (props) => {
  const {
    createTodo,
  } = props;
  const dispatch = useDispatch()
  const [value, setValue] = useState('');

  const onInputChange = (ev) => {
    setValue(ev.target.value)
  }
/*
  const onSubmit = (ev) => {
    ev.preventDefault();
    createTodo(value);
    setValue('');
  }
  */
  const onSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      addTask({
        text: value,
      })
    )

    setValue('');
  }


  return (
    <form className="list__task" onSubmit={onSubmit}>
      <input
        className="list__task__text new"
        placeholder="Write new task..."
        value={value}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="list_task_completed add"
      >
        Add Task
      </button>
    </form>
  )
}





export default Add;
