import React from 'react';
import classes from './App.module.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className={classes.app}>
      <Calculator />
    </div>
  );
}

export default App;
