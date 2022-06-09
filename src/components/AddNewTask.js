import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/user/actions';
import styles from '../styles/AddNewTask.module.css';


const AddNewTask = (props) => {

  const [value, setValue] = useState('');

  const onInputChange = (ev) => {
    setValue(ev.target.value)
  }
  const dispatch = useDispatch()


  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!(value.trim())) return;
    dispatch(addTask(value));
    setValue('');
  }


  return (
    <form className={styles.list__task} onSubmit={onSubmit}>
      <input
        className={styles.list__task__text}
        placeholder="Write new task..."
        value={value}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className={`${styles.list_task_completed} ${styles.add}`}
      >
        Add Task
      </button>
    </form>
  )
}





export default AddNewTask;
