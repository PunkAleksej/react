import React from 'react';
import styles from '../styles/Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask} from '../store/user/actions';



import { ButtonComplete, ButtonDelete, Button, Div } from '../styles/TaskStyle.js';


function Task(props) {

  const { value } = props;
  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(deleteTask(value.key))
  }

  const onComplete = () => {
    dispatch(completeTask(value.key))
  }
  
  if (!value) {
    return null
  }

  return (
    <Div isActive={value.active}>
      <ButtonComplete
        onClick={onComplete}
      >
        {value.key}
      </ButtonComplete>
      <label
        className="task_text"
      >{value.id}  {value.text}
      </label>
      <ButtonDelete 
        onClick={onDelete}>
        {value.key}
      </ButtonDelete>
    </Div>
  )


}



export default Task;