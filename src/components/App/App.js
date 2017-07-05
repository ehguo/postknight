import React, { PureComponent } from 'react';
import classNames from 'classnames';
import StatCalculator from '../StatCalculator';

import background from '../../images/background.jpg';

class App extends PureComponent {
  render() {
    const appStyles = classNames('flex-col', 'flex-center', 'text-center', 'vh-100');
    const imageContainerStyles = classNames(
      'absolute',
      'z-behind',
      'width-fit',
      'height-fit',
      'overflow-hidden'
    );
    const imageStyles = classNames(
      // 'width-fit',
      'height-fit',
      'opaque'
    )
    return (
      <div className={appStyles}>
        <div className={imageContainerStyles}>
          <img className={imageStyles} src={background} />
        </div>
        <StatCalculator />
      </div>
    );
  }
}

export default App;
