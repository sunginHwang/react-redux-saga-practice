import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './saga/store';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={configureStore()}>
            <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
