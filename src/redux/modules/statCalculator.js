export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const JUMP_TO_LEVEL = 'JUMP_TO_LEVEL';
export const RESET = 'RESET';

const initialState = () => ({
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
});

export default function reducer(state = initialState(), action) {
  const stat = action.stat;
  let value, cost;
  if (stat) {
    value = state[stat].value;
    cost = state[stat].cost;
  }
  switch (action.type) {
    case INCREMENT:
      return inc(stat, state);
    case DECREMENT:
      if (state[stat].value === 1) return state;
      return dec(stat, state);
    case JUMP_TO_LEVEL:
      return jump(stat, action.level, state);
    case RESET:
      return initialState();
    default:
      return state;
  }
}

function inc(stat, state) {
  if (state.points < state[stat].cost) return state;
  const newState = { ...state };
  newState[stat].value += 1;
  newState.points -= newState[stat].cost;
  if (newState[stat].value % 10 === 2) newState[stat].cost += 1;
  return newState;
}

function dec(stat, state) {
  const newState = { ...state };
  newState[stat].value -= 1;
  if (newState[stat].value % 10 === 1) newState[stat].cost -= 1;
  newState.points += newState[stat].cost;
  return newState;
}

function jump(stat, level, state) {
  let newState = { ...state };
  let currLevel = newState[stat].value;
  while (currLevel < level) {
    newState = inc(stat, newState);
    currLevel++;
  }
  while (currLevel > level) {
    newState = dec(stat, newState);
    currLevel--;
  }
  return newState;
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

export function jumpToLevel(stat, level) {
  return {
    type: JUMP_TO_LEVEL,
    stat,
    level
  }
}

export function reset() {
  return {
    type: RESET
  }
}
