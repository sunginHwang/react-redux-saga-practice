import React, { Component } from 'react';
import ReduxSagaContainer from './container/ReduxSagaContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxSagaContainer/>
      </div>
    );
  }
}

export default App;
