import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom'
import ReduxThunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './reducers';
import App from "./components/app";

const createStoreWithMiddleware = createStore(reducers,{},applyMiddleware(ReduxThunk));


ReactDOM.render(
    <Provider store={createStoreWithMiddleware}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.root'));