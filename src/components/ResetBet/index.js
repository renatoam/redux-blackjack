import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

function ResetBet({ resetBet }) {
  return (
    <>
      <button onClick={() => resetBet()}>X</button>
    </>
  )
}

export default connect(null, mapDispatchToProps)(ResetBet);