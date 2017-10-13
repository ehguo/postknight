import React, { PureComponent } from 'react';
import glamorous, { Div } from 'glamorous';
import StatCalculator from 'components/StatCalculator';
import Equipment from 'components/Equipment';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 20px)',
  ':after': {
    content: `''`,
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: `url('images/background.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
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
