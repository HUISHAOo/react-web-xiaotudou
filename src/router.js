import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/Login';
import Example from './routes/Example';
// import Login from './routes/Login/index';
import Home from './routes/Home/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/Example" component={Example} />
        <Route path="/Login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
