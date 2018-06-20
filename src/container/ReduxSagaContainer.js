import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ReduxSagaExampleActions from '../core/reducers/ReduxSagaExample';
import ReduxSagaComponent from '../component/ReduxSagaComponent';

class ReduxSagaContainer extends Component {

    successBtnClick(){
        const { ReduxSagaExampleActions } = this.props;
        ReduxSagaExampleActions.asyncCalling(1);
    }

    failBtnClick(){
        const { ReduxSagaExampleActions } = this.props;
        ReduxSagaExampleActions.asyncCalling('12/e212');
    }
  render() {
      const { count, title, body } = this.props;
    return(
     <div>
         <ReduxSagaComponent/>
         <div>redux status is <span> {count}</span></div>
         <div>redux body is <span> {body}</span></div>
         <div>redux title is <span> {title}</span></div>
         <div>
             <button onClick={(e)=>{
                 this.successBtnClick()}}>apiSuccessCallButtons</button>
             <button onClick={(e)=>{
                 this.failBtnClick()}}>apiFailCallButton</button>
         </div>
     </div>
    );
  }
}
export default connect(
    (state) => ({
        count: state.ReduxSagaExampleReducer.count,
        body: state.ReduxSagaExampleReducer.body,
        title: state.ReduxSagaExampleReducer.title
    }),
    (dispatch) => ({
        ReduxSagaExampleActions: bindActionCreators(ReduxSagaExampleActions, dispatch),
    })
)(ReduxSagaContainer);
