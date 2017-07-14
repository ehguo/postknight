import React from 'react';
import cn from 'classnames';

const Counter = ({ stat, data, increment, decrement, jumpToLevel }) => {
  const counterStyles = cn(
    'flex-col',
    'width-50',
    'm-5',
    'text-center'
  );
  const inputStyles = cn(
    'text-center'
  );

  const inc = () => increment(stat);
  const dec = () => decrement(stat);
  const jump = (e) => jumpToLevel(stat, e.target.value);

  return (
    <div className={counterStyles}>
      <div>{stat}</div>
      <button onClick={inc}>+</button>
      <input className={inputStyles} type="number" value={data.value} onChange={jump}/>
      <button onClick={dec}>-</button>
      <div>{data.cost} pts</div>
    </div>
  );
}

export default Counter;
