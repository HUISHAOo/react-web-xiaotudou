import React, { Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/Login';
import Example from './routes/Example';
import Top from '../src/layouts/TopMenu'
import SiderLayout from '../src/layouts/SiderLayout'
// import Login from './routes/Login/index';
import Home from './routes/Home/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/" render={() => (
          <div>
            <Top >
              <Route path="/products" component={Products} />
              <Route path="/image" component={Example} />

            </Top>

          </div>

        )} />
        {/* <Route path="/" render={() => (
          <SiderLayout >
            <Route path="/Example" component={Example} />
          </SiderLayout>
        )} /> */}
        <Redirect path='/' exact to='/Login' />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
