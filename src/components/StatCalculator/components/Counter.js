import React from 'react';
import classNames from 'classnames';

const Counter = ({ stat, data, increment, decrement, change }) => {
  const counterStyles = classNames(
    'counter',
    'margin',
    'flex-col',
    {
      'bg-red': stat === 'str',
      'bg-green': stat === 'agi',
      'bg-blue': stat === 'int',
      'bg-orange': stat === 'vit'
    }
  );
  const textStyles = classNames('padding', 'white', 'uppercase');
  const buttonStyles = classNames('padding', 'border-none', 'bg-grey', 'white');

  const inc = () => increment(stat);
  const dec = () => decrement(stat);
  const chng = (e) => {
    change(e);
  };

  return (
    <div className={counterStyles}>
      <div className={textStyles}>{stat}</div>
      <button className={buttonStyles} onClick={inc}>+</button>
      <input type="number" value={data.value} onChange={chng} />
      <button className={buttonStyles} onClick={dec}>-</button>
      <div className={textStyles}>{data.cost} pts</div>
    </div>
  );
}

export default Counter;
