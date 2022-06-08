import React from 'react';
import styles from '../styles/Task.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, completeTask} from '../store/user/actions';


function Task(props) {

  const { value } = props;
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(
      deleteTask(value.key)
      )
  }
  const onComplete = () => {
    dispatch(
      completeTask(value.key)
      )
  }
  
  if (!value) {
    return null
  }
  
  return (
    <div className={styles.task}>
      <button 
        className={styles.task_completed}
        onClick={onComplete}
      >
        {value.key}
      </button>
      <label
        className={`${styles.task_text} ${!value.active ? styles.finish : ''}`}
      >{value.id}  {value.text}
       
      </label>
      <button 
        className={styles.task_delete}
        onClick={onDelete}>
        {value.key}
      </button>
    </div>
  )


}



export default Task;