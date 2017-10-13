import React, { PureComponent } from 'react';
import glamorous, { Div } from 'glamorous';
import StatCalculator from 'components/StatCalculator';
import Equipment from 'components/Equipment';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  ':after': {
    content: `''`,
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: `url('images/background.jpg')`,
    opacity: '0.35'
  }
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
