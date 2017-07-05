import React, { PureComponent } from 'react';
import classNames from 'classnames';
import StatCalculator from '../StatCalculator';

import background from '../../images/background.jpg';

class App extends PureComponent {
  render() {
    const appStyles = classNames('flex-col', 'flex-center', 'text-center', 'vh-100');
    const imageStyles = classNames(
      'absolute',
      'z-behind',
      'width-fit',
      'height-fit',
      'overflow-hidden'
    );
    return (
      <div className={appStyles}>
        <div className={imageStyles}>
          <img src={background} />
        </div>
        <StatCalculator />
      </div>
    );
  }
}

export default App;
