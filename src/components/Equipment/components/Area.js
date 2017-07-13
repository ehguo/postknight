import React from 'react';
import EquipSet from './EquipSet';
import { EQUIPMENT } from '../equipData';

const Area = ({ areaName }) => {
  const equipSets = [];
  Object.keys(EQUIPMENT[areaName]).forEach(set => {
    if (['NOVICE', 'TIDERIDER', 'HIGHWIND', 'CRUSADER', 'GOLEM', 'PRIMAL'].includes(set))
    equipSets.push(
      <EquipSet key={set} setName={set} data={EQUIPMENT[areaName][set]} />
    );
  });
  return (
    <div>
      {equipSets}
    </div>
  );
}

export default Area;
