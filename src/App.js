import React from 'react';

import styles from  './styles/AddNewTask.module.css';

import AddNewTask from './components/AddNewTask.js';
import List from './components/List.js';
import Header from './components/Header.js';

function App() {
  return (
      <div className={styles.container}>
        <Header  />
        <AddNewTask />
        <List />
      </div>
  );
}

export default App;
