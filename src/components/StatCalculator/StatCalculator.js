import React, { Component } from 'react';
import { Counter } from './components';

class StatCalculator extends Component {
  reset = () => this.props.reset();
  render() {
    const { points, str, agi, int, vit, increment, decrement } = this.props;
    const stats = { str, agi, int, vit };
    const counters = Object.keys(stats).map(stat => {
      return (
        <Counter
          key={stat}
          stat={stat}
          data={stats[stat]}
          increment={increment}
          decrement={decrement}
        />
      );
    });
    return (
      <div className="stat-calculator">
        <div>Points: {points}</div>
        <div className="counter-container">{counters}</div>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StatCalculator;
