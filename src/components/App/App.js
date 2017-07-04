import React, { PureComponent } from 'react';
import classNames from 'classnames';
import StatCalculator from '../StatCalculator';

class App extends PureComponent {
  render() {
    const appStyles = classNames('app', 'flex-col', 'flex-center', 'text-center');
    return (
      <div className={appStyles}>
        <StatCalculator />
      </div>
    );
  }
}

export default App;
