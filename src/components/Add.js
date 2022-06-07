import React, { useState } from 'react';




const Add = (props) => {
  const {
    createTodo,
  } = props;

  const [value, setValue] = useState('');

  const onInputChange = (ev) => {
    setValue(ev.target.value)
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    createTodo(value);
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
