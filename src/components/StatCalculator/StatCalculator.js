import React, { PureComponent } from 'react';
import R from 'ramda';
import cn from 'classnames';
import { Counter } from './components';

export default class StatCalculator extends PureComponent {
  render() {
    const containerStyles = cn(
      'flex-col',
      'flex-center',
      'outline-darkbrown',
      'border-brown',
      'bg-lightbrown',
      'p-5'
    );
    const pointStyles = cn('fontsize-10');
    const counterContainerStyles = cn('flex-row');
    const resetStyles = cn('width-100');

    const { points } = this.props;
    const stats = ['str', 'agi', 'int', 'vit'];

    const renderCounter = (stat) => (
      <Counter
        key={stat}
        stat={stat}
        data={this.props[stat]}
        {...this.props}
      />
    );
    
    const counters = R.map(renderCounter, stats);
    return (
      <div className={containerStyles}>
        <div className={pointStyles}>Points: {points}</div>
        <div className={counterContainerStyles}>{counters}</div>
        <button className={resetStyles} onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}
