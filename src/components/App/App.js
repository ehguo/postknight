import React, { PureComponent } from 'react';
import cn from 'classnames';
import StatCalculator from 'components/StatCalculator';
import Equipment from 'components/Equipment';

class App extends PureComponent {
  render() {
    const appStyles = cn('flex-col', 'flex-center', 'vh-100');
    return (
      <div className={appStyles}>
        <StatCalculator />
      </div>
    );
  }
}

export default App;
