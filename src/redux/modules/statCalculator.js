export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CHANGE = 'CHANGE';
export const RESET = 'RESET';

const initialState = {
  points: 1244,
  str: {
    value: 1,
    cost: 1
  },
  agi: {
    value: 1,
    cost: 1
  },
  int: {
    value: 1,
    cost: 1
  },
  vit: {
    value: 1,
    cost: 1
  }
}

export default function reducer(state = initialState, action) {
  const stat = action.stat;
  let value, cost, newCost;
  if (stat) {
    value = state[stat].value;
    cost = state[stat].cost;
  }
  switch (action.type) {
    case INCREMENT:
      newCost = getNewCost(value, cost, INCREMENT);
      return {
        ...state,
        [stat]: {
          value: value + 1,
          cost: newCost
        },
        points: value === 1 ? state.points - 1 : state.points - newCost,
      };
    case DECREMENT:
      if (value === 1) return state;
      newCost = getNewCost(value, cost, DECREMENT);
      return {
        ...state,
        [stat]: {
          value: value - 1,
          cost: newCost
        },
        points: value === 2 ? state.points + 1 : state.points + newCost
      };
    case CHANGE:
      console.log(action.e.target.value);
    case RESET:
      return initialState;
    default:
      return state;
  }
}

function getNewCost(value, cost, modifier) {
  switch (modifier) {
    case INCREMENT:
      return value < 2
        ? 2
        : Math.floor((value + 18) / 10);
    case DECREMENT:
      return value === 2
        ? 1
        : Math.floor((value + 17) / 10);
  }
}

export function increment(stat) {
  return {
    type: INCREMENT,
    stat
  };
}

export function decrement(stat) {
  return {
    type: DECREMENT,
    stat
  };
}

export function change(e) {
  return {
    type: CHANGE,
    e
  }
}

export function reset() {
  return {
    type: RESET
  }
}
