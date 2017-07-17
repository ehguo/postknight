import React, { PureComponent } from 'react';
import R from 'ramda';
import cn from 'classnames';
import { Counter } from './components';
import { Stats } from 'redux/modules/statCalculator';

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
    const pointStyles = cn(
      'fontsize-10',
      'roboto',
      'grey'
    );
    const counterContainerStyles = cn('flex-row');
    const resetStyles = cn('width-100',
      'roboto',
      'bg-grey',
      'white',
      'border-none',
      'p-5'
    );

    const stats = ['str', 'agi', 'int', 'vit'];

    const renderCounter = (stat) => (
      <Counter
        key={stat}
        stat={stat}
        val={this.props[stat]}
        {...this.props}
      />
    );
    
    const counters = R.map(renderCounter, stats);
    return (
      <div className={containerStyles}>
        <div className={pointStyles}>Points: {this.props.points}</div>
        <div className={counterContainerStyles}>{counters}</div>
        <button className={resetStyles} onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}
