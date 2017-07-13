import React, { PureComponent } from 'react';
import { AREAS } from './equipData';
import Area from './components/Area';

export default class Equipment extends PureComponent {
  render() {
    const areas = [];
    Object.keys(AREAS).forEach(area => {
      areas.push(
        <Area key={area} areaName={area} />
      );
    });
    return (
      <div>
        {areas}
      </div>
    );
  }
}
