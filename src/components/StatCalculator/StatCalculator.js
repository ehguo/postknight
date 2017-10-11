import React, { PureComponent } from 'react';
import R from 'ramda';
import glamorous, { Div, Button } from 'glamorous';
import { Counter } from './components';
import { Stats } from 'redux/modules/statCalculator';

const statCalculatorStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  outline: '#492F1C',
  border: '3px solid #6D431B',
  padding: '5px'
}

const pointDisplayStyle = {
  fontSize: '1em',
  fontFamily: 'Roboto',
  color: '#444444'
}

const counterWrapperStyle = {
  display: 'flex',
  flexDirection: 'row'
}

const resetButtonStyle = {
  padding: '5px',
  border: 'none',
  width: '100px',
  background: '#444444',
  fontFamily: 'Roboto',
  color: '#FFFFFF',
}

export default class StatCalculator extends PureComponent {
  render() {
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
      <Div css={statCalculatorStyle}>
        <Div css={pointDisplayStyle}>
          Points: {this.props.points}
        </Div>
        <Div css={counterWrapperStyle}>
          {counters}
        </Div>
        <Button
          css={resetButtonStyle}
          onClick={this.props.reset}
        >Reset</Button>
      </Div>
    );
  }
}
