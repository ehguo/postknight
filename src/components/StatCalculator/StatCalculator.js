import React, { PureComponent } from 'react';
import R from 'ramda';
import glamorous, { Div, Button } from 'glamorous';
import { Counter } from './components';
import { Stats } from 'redux/modules/statCalculator';
import { colors } from 'utils/colors';

const statCalculatorStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px'
}

const pointDisplayStyle = {
  fontSize: '1em',
  fontFamily: 'Roboto',
  color: colors.CHARCOAL
}

const counterWrapperStyle = {
  display: 'flex',
  flexDirection: 'row'
}

const resetButtonStyle = {
  padding: '5px',
  border: 'none',
  width: '100px',
  fontFamily: 'Roboto'
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
        <Button
          css={resetButtonStyle}
          onClick={this.props.reset}
        >Reset</Button>
        <Div css={counterWrapperStyle}>
          {counters}
        </Div>
      </Div>
    );
  }
}
