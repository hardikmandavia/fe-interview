import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'react';

import { actions, BillsActionType } from '../../store/reducers/billsReducer';

class Bills extends Component<any> {
  componentDidMount() {
    this.props.fetchBills();
  }

  render() {
    return <div>BILLS!!</div>
  }
}

const mapStateToProps = (state: any) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch: Dispatch<BillsActionType>) => {
  return {
    fetchBills: () => dispatch(actions.fetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills);