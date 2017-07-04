import React from 'react';

const Counter = ({stat, data, increment, decrement}) => {
  return (
    <div className="counter">
      <div className="stat-name">{stat}</div>
      <button onClick={() => increment(stat)}>+</button>
      <div className="stat-value">{data.value}</div>
      <button onClick={() => decrement(stat)}>-</button>
      <div className="stat-cost">{data.cost} pts</div>
    </div>
  );
}

export default Counter;
