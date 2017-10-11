import React, { PureComponent } from 'react';
import cn from 'classnames';
import glamorous, { Div, Button } from 'glamorous';
import { getCost } from 'redux/modules/statCalculator';

const counterStyle = [
  {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
    padding: '5px',
    width: '50px',
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  ({ stat }) => ({
    background:
      stat === 'str'
      ? '#C91A25'
      : stat === 'agi'
        ? '#0BBB5A'
        : stat === 'int'
          ? '#0788D1'
          : stat === 'vit'
            ? '#E97900'
            : '#000000'
  })
];

const statNameStyle = {
  fontSize: '1em'
}

const statValueStyle = {
  textAlign: 'center'
}

const buttonStyle = {
  margin: '5px',
  padding: '5px',
  border: 'none',
  background: '#444444',
  color: '#FFFFFF'
}

const statCostStyle = {
  fontSize: '.8em'
}

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
    return (
      <Div css={counterStyle} stat={this.props.stat}>
        <Div css={statNameStyle}>
          {this.props.stat}
        </Div>
        <Button
          css={buttonStyle}
          onClick={this.inc}
          onMouseDown={this.holdInc}
          onMouseUp={this.release}
        >+</Button>
        <Div css={statValueStyle}>{this.props.val}</Div>
        <Button
          css={buttonStyle}
          onClick={this.dec}
          onMouseDown={this.holdDec}
          onMouseUp={this.release}
        >-</Button>
        <Div css={statCostStyle}>
          {getCost(this.props.val)} pts
        </Div>
      </Div>
    );
  }
}
