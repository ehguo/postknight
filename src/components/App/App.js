import React, { PureComponent } from 'react';
import glamorous, { Div } from 'glamorous';
import StatCalculator from 'components/StatCalculator';
import Equipment from 'components/Equipment';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

export default class App extends PureComponent {
  render() {
    return (
      <Div css={appStyle}>
        <StatCalculator />
      </Div>
    );
  }
}
