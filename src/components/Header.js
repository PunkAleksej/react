import React from 'react';
import styles from '../styles/Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { sortPriority } from '../store/user/actions';


function Header(props) {
  const dispatch = useDispatch()

  const taskDataList = useSelector((state) => state.todoState.todos)
  
  const completePriority = () => {
    dispatch(sortPriority('COMPLETE'))

  }
  const activePriority = () => {
    dispatch(sortPriority('ACTIVE'))
  }

  const allPriority = () => {
    dispatch(sortPriority('ALL'))
  }

  
  let active = 0;
  let complete = 0;
  taskDataList.forEach(element => {
    element.active? active++: complete++
  });
  let all = active + complete
  return (
    <div>
      <header>
        <button 
        className={`${styles.header__button} ${styles.active}`}
        onClick={activePriority}> 
        {active} Active
        </button>
        <button
        className={`${styles.header__button} ${styles.active}`}
        onClick={allPriority}>
        {all} all
        </button>
        <button 
        className={`${styles.header__button} ${styles.completed}`}
        onClick={completePriority}>
        {complete} Completed
        </button>
      </header>
    </div>
  );
}





export default Header;