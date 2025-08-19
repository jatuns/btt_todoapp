import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter Page</h1>
      <p>Count: {count}</p>
        <button className="fa-icon" onClick={() => setCount(count + 1)}>
            <FontAwesomeIcon icon={faPlus} 
            bounce
            size="5x"
            style={{ color: "black"
            }}
            />
        </button>

        <button className="fa-icon" onClick={() => setCount(count - 1)}>
            <FontAwesomeIcon icon={faMinus} bounce
             size="5x"/>
        </button>
    </div>
  );
};