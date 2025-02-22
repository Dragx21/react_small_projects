import React, { useState } from 'react';
import styles from '../styles/Style.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <div className="btns-container">
        <button className="increment" onClick={() => setCount(count + 1)}>Increment</button>
        <button className='decrement' onClick={()=> setCount(count-1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
