import React from 'react';
import classNames from 'classnames';

const Counter = ({ stat, data, increment, decrement, jumpToLevel }) => {
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
  const textStyles = classNames('small-text', 'padding', 'white', 'uppercase');
  const inputStyles = classNames(
    'padding',
    'no-spinner',
    'bg-none',
    'border-none',
    'text-center',
    'white',
    'small-text',
    'width-60'
  );
  const buttonStyles = classNames(
    'padding',
    'border-none',
    'bg-grey',
    'white',
    'small-text'
  );

  const inc = () => increment(stat);
  const dec = () => decrement(stat);
  const jump = (e) => {
    let val = e.target.value;
    jumpToLevel(stat, val);
  };

  return (
    <div className={counterStyles}>
      <div className={textStyles}>{stat}</div>
      <button className={buttonStyles} onClick={inc}>+</button>
      <input className={inputStyles} type="number" value={data.value} onChange={jump} />
      <button className={buttonStyles} onClick={dec}>-</button>
      <div className={textStyles}>{data.cost} pts</div>
    </div>
  );
}

export default Counter;
