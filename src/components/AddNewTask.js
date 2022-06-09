import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/user/actions';
import styles from '../styles/AddNewTask.module.css';
import styled from "styled-components";

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

  const Form = styled.form`
  border-radius: 10px;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 25px;
  `;

  const Input = styled.input`
  width: 100%;
	border: 1px solid #83b4eb;
	border-radius: 10px;
	font-size: 40px;
	padding-left: 5px;
  @media (max-width: 1280px) {
    font-size: 20px;
	}
  `;

  const Button = styled.button`
  background-color: #42e3bd;
	border-radius: 10px;
	background-size: cover;
	min-width: 64px;
	min-height: 64px;
  min-width: 240px;
	font-size: 40px;
	background-image: none;
  @media (max-width: 1280px) {
    min-width: 0px;
		font-size: 20px;
		width: 30%;
		background-image: none;
	}
  `;

  return (
    <form className={styles.list__task} onSubmit={onSubmit}>
      <input
        className={styles.list__task__text}
        placeholder="Write new task..."
        value={value}
        onChange={onInputChange}
      />
      <Button
        type="submit"
        className={`${styles.list_task_completed} ${styles.add}`}
      >
        Add Task
      </Button>
    </form>
  )
}

export default AddNewTask;
