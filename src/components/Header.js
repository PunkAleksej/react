import React from 'react';
import styles from '../styles/Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
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
      <header>
        <button 
        className={`${styles.header__button} ${styles.active}`}
        onClick={activePriority}> 
        {counter.ACTIVE} Active
        </button>
        <button
        className={`${styles.header__button} ${styles.active}`}
        onClick={allPriority}>
        {counter.ALL} all
        </button>
        <button 
        className={`${styles.header__button} ${styles.completed}`}
        onClick={completePriority}>
        {counter.COMPLETE} Completed
        </button>
      </header>
    </div>
  );
}





export default Header;