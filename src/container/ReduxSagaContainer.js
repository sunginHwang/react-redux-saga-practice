import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReduxSagaComponent from '../component/ReduxSagaComponent';

class ReduxSagaContainer extends Component {

  render() {
    return(
     <div>
         <ReduxSagaComponent/>
         <div>redux count is <span> ${this.props.count}`</span></div>
     </div>
    );
  }
}
export default connect(
    (state) => ({
        count: state.ReduxSagaExampleReducer.count
    }),
    (dispatch) => ({})
)(ReduxSagaComponent);
