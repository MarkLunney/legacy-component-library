import React from 'react';
import './Example.scss';

const Example = ({ title, count, onSubmit }) => {
  
  function handleClick(e) {
    e.preventDefault();
    onSubmit(count);
  }

  return (
    <div className="Example">
      <h1 className="Example-text">{title}</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Display current count</button>
    </div>
  )
};

export default Example;
