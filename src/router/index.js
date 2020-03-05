import React from 'react'
import dynamic from 'dva/dynamic'
import { Router, Route, Switch } from 'dva/router'

export default function RouterConfig({ history, app }) {
  
  const Home = dynamic({
    app,
    // models: () => [
    //   import('./models/users'),
    // ],
    component: () => import('@/pages/home'),
  })
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}


