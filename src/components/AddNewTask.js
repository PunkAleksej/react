import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/user/actions';
import {Form, Input, Button} from '../styles/AddNewTaskStyle.js';
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


  return (
    <Form onSubmit={onSubmit}>
      <input
        className="text-input"
        placeholder="Write new task..."
        value={value}
        onChange={onInputChange}
      />
      <Button
        type="submit"
      >
        Add Task
      </Button>
    </Form>
  )
}

export default AddNewTask;


