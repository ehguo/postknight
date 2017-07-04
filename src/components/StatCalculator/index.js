import StatCalculator from './StatCalculator';
import { connect } from 'react-redux';

import { increment, decrement, change, reset } from 'redux/modules/statCalculator';

const mapStateToProps = (state) => ({
  points: state.statCalculator.points,
  str: state.statCalculator.str,
  agi: state.statCalculator.agi,
  int: state.statCalculator.int,
  vit: state.statCalculator.vit
});

const mapDispatchToProps = (dispatch) => ({
  increment: (stat) => dispatch(increment(stat)),
  decrement: (stat) => dispatch(decrement(stat)),
  change: (e) => dispatch(change(e)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatCalculator);
