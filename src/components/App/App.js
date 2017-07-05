import React, { PureComponent } from 'react';
import classNames from 'classnames';
import StatCalculator from '../StatCalculator';

import background from '../../images/background.jpg';

class App extends PureComponent {
  render() {
    const appStyles = classNames('flex-col', 'flex-center', 'text-center', 'vh-100');
    const imageStyles = classNames('absolute', 'z-behind');
    return (
      <div className={appStyles}>
        <img className={imageStyles} src={background} />
        <StatCalculator />
      </div>
    );
  }
}

export default App;
