import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Counter } from './components';

class StatCalculator extends PureComponent {
  reset = () => this.props.reset();
  render() {
    const statCalcStyles = classNames('flex-col');
    const pointStyles = classNames('margin', 'padding', 'bg-white');
    const counterContainerStyles = classNames('flex-row');
    const resetStyles = classNames('reset', 'bg-none', 'border-none');

    const { points, str, agi, int, vit, increment, decrement, change } = this.props;
    const stats = { str, agi, int, vit };
    const counters = Object.keys(stats).map(stat => {
      return (
        <Counter
          key={stat}
          stat={stat}
          data={stats[stat]}
          increment={increment}
          decrement={decrement}
          change={change}
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
