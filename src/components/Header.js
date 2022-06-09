import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

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


  const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0px;
    @media (max-width: 1280px) {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding: 0px;
    }
    `;

  const Header__button = styled.button`
    background-color: #83b4eb;
    border: 2px solid blue;
    border-radius: 10px;
    font-size: 40px;
    text-align: center;
    width: 35%;
    margin: 10px;
    @media (max-width: 1280px) {
      background-color: #83b4eb;
      border: 2px solid blue;
      border-radius: 10px;
      font-size: 20px;
      margin: 0px;
      margin-bottom: 15px;
      text-align: center;
      width: 100%;
    }
  `;


  return (
    <div>
      <Header>
        <Header__button
        onClick={activePriority}> 
        {counter.ACTIVE} Active
        </Header__button>
        <Header__button
        onClick={allPriority}>
        {counter.ALL} all
        </Header__button>
        <Header__button
        onClick={completePriority}>
        {counter.COMPLETE} Completed
        </Header__button>
      </Header>
    </div>
  );
}

export default Header;