import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './rootStore';
import { BrowserRouter,Route } from 'react-router-dom'
import Login from './containers/login/login';
import Register from './containers/register/register'
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import './config'
import registerServiceWorker from './registerServiceWorker';

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}
render()
registerServiceWorker()