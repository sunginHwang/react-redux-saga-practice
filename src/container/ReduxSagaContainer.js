import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sampleAction from '../core/actions/SampleApi';
import ReduxSagaComponent from '../component/ReduxSagaComponent';

class ReduxSagaContainer extends Component {

    successBtnClick(){
        const { sampleAction } = this.props;
        console.log(sampleAction);
        sampleAction.asyncCall(1);
    }

    failBtnClick(){
        const { sampleAction } = this.props;
        sampleAction.asyncCall('12/e212');
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
        sampleAction: bindActionCreators(sampleAction, dispatch),
    })
)(ReduxSagaContainer);
