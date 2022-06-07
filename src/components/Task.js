import React from 'react';
import styles from './Task.module.css';




function Task(props) {
  const { value, deleteTodo, completeTodo } = props;

  const onTextChange = (ev) => {
    console.log(1)
    console.log(ev.target.value)
  }

  const onTextChange2 = (ev) => {
    ev.preventDefault();
    //createTodo(value);
    //setValue('');
  }



  const onDelete = () => {
    deleteTodo(value.key)
  }
  const onComplete = () => {
    completeTodo(value.key)
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
        onDoubleClick={onTextChange}
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