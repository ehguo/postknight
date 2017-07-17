// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// Enums
export const Stats = {
  STR: 'str',
  AGI: 'agi',
  INT: 'int',
  VIT: 'vit'
};

// Initial state
const initialState = () => ({
  points: 1244,
  str: 1,
  agi: 1,
  int: 1,
  vit: 1
});

// Reducer
export default function reducer(state = initialState(), action) {
  const stat = action.stat;
  const val = state[stat];
  let cost;
  switch (action.type) {
    case INCREMENT:
      cost = getCost(val);
      if (state.points - cost >= 0)
        return {
          ...state,
          points: state.points - getCost(val),
          [stat]: val + 1
        };
      else return state;
    case DECREMENT:
      cost = getCost(val - 1);
      if (val > 1)
        return {
          ...state,
          points: state.points + getCost(val - 1),
          [stat]: state[stat] - 1
        };
      else return state;
    case RESET:
      return initialState();
    default:
      return state;
  }
}

// Action creators
export const increment = (stat) => ({
  type: INCREMENT,
  stat
});

export const decrement = (stat) => ({
  type: DECREMENT,
  stat
});

export const reset = () => ({
  type: RESET
});

// Utility functions
export const getCost = (value) => {
  return value === 1
    ? 1
    : Math.floor((value - 2) / 10) + 2
};
