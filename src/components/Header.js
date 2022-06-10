import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import { HeaderStyle, HeaderButton} from '../styles/HeaderStyle.js';
//import styles from '../styles/Header.module.css';
import { sortPriority } from '../store/user/actions';
import { selectHeaderCounter } from '../utils/headerCounter'


function Header(props) {
  const dispatch = useDispatch()
  
  const completePriority = () => {
    dispatch(sortPriority('COMPLETE'))

  }
  const activePriority = () => {
    dispatch(sortPriority('ACTIVE'))
  }

  const allPriority = () => {
    dispatch(sortPriority('ALL'))
  }

  const counter = useSelector(selectHeaderCounter)


  return (
    <div>
      <HeaderStyle>
        <HeaderButton
        onClick={activePriority}> 
        {counter.ACTIVE} Active
        </ HeaderButton>
        <HeaderButton
        onClick={allPriority}>
        {counter.ALL} all
        </ HeaderButton>
        <HeaderButton
        onClick={completePriority}>
        {counter.COMPLETE} Completed
        </ HeaderButton>
      </ HeaderStyle>
    </div>
  );
}

export default Header;