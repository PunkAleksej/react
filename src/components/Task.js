import React from 'react';
import styles from '../styles/Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask} from '../store/user/actions';
import styled from "styled-components";

import completeImg from '../img/check-mark.png'
import deleteImg from '../img/trash.png'

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
  
  const Div = styled.div`
  border-radius: 10px;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 25px;
  `;

  const Button = styled.button`
  border-radius: 10px;
	background-size: cover;
	min-width: 64px;
	min-height: 64px;
	font-size: 0px;
  @media (max-width: 1280px) {
    min-width: 32px;
		min-height: 32px;
  }
  `;

  const ButtonComplete = styled(Button)`
  background-color: #42e3bd;
	background-image: url(${completeImg});
  `;
  
  const ButtonDelete = styled(Button)`
  background-color: #eb3b64;
	background-image: url(${deleteImg});
  `;



  return (
    <Div>
      <ButtonComplete
        onClick={onComplete}
      >
        {value.key}
      </ButtonComplete>
      <label
        className={`${styles.task_text} ${!value.active ? styles.finish : ''}`}
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