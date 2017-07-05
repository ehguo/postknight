import React, { Component } from 'react';
import classNames from 'classnames';
import { Counter } from './components';

class StatCalculator extends Component {
  reset = () => this.props.reset();
  render() {
    const statCalcStyles = classNames('flex-col');
    const pointStyles = classNames('small-text', 'margin', 'padding', 'bg-none', 'border-grey');
    const counterContainerStyles = classNames('flex-row');
    const resetStyles = classNames(
      'margin',
      'padding',
      'small-text',
      'bg-none',
      'border-grey'
    );

    const { points, str, agi, int, vit, increment, decrement, jumpToLevel } = this.props;
    const stats = { str, agi, int, vit };
    const counters = Object.keys(stats).map(stat => {
      return (
        <Counter
          key={stat}
          stat={stat}
          data={stats[stat]}
          increment={increment}
          decrement={decrement}
          jumpToLevel={jumpToLevel}
        />
      );
    });
    return (
      <div className={statCalcStyles}>
        <div className={pointStyles}>Points: {points}</div>
        <div className={counterContainerStyles}>{counters}</div>
        <button className={resetStyles} onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StatCalculator;
