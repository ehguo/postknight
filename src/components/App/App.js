import React, { PureComponent } from 'react';
import cn from 'classnames';
import { Equipment } from 'components/Equipment';

class App extends PureComponent {
  render() {
    const appStyles = cn('flex-col', 'flex-center');
    return (
      <div className={appStyles}>
        <Equipment />
      </div>
    );
  }
}

export default App;
