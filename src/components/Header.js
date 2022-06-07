import React from 'react';
import styles from './Header.module.css';


function Header(props) {
  const { taskDataList, listSort } = props

  const completePriority = () => {
    listSort('complete')
  }
  const activePriority = () => {
    listSort('active')
  }

  const allPriority = () => {
    listSort('all')
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