import React, { PureComponent } from 'react';
import cn from 'classnames';
import { getCost } from 'redux/modules/statCalculator';

export default class Counter extends PureComponent {
  state = {
    interval: null
  }

  inc = () => this.props.increment(this.props.stat);
  dec = () => this.props.decrement(this.props.stat);

  holdInc = () => this.interval = setInterval(this.inc, 75);
  holdDec = () => this.interval = setInterval(this.dec, 75);
  release = () => clearInterval(this.interval);

  render() {
    const counterStyles = cn(
      'flex-col',
      'width-50',
      'm-5',
      'pt-5',
      'pb-5',
      'text-center',
      'roboto',
      'uppercase',
      'white',
      {
        'bg-red': this.props.stat === 'str',
        'bg-green': this.props.stat === 'agi',
        'bg-blue': this.props.stat === 'int',
        'bg-orange': this.props.stat === 'vit',
      }
    );
    const valueStyles = cn(
      'text-center'
    );
    const buttonStyles = cn(
      'border-none',
      'mt-5', 'mb-5',
      'p-5',
      'bg-grey',
      'white'
    );
    const costStyles = cn(
      'fontsize-8'
    );

    return (
      <div className={counterStyles}>
        <div>{this.props.stat}</div>
        <button
          className={buttonStyles}
          onClick={this.inc}
          onMouseDown={this.holdInc}
          onMouseUp={this.release}
        >+</button>
        <div className={valueStyles}>{this.props.val}</div>
        <button
          className={buttonStyles}
          onClick={this.dec}
          onMouseDown={this.holdDec}
          onMouseUp={this.release}
        >-</button>
        <div className={costStyles}>{getCost(this.props.val)} pts</div>
      </div>
    );
  }
}
