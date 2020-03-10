import React, { useState }from 'react'
import Cpt from './components'
import { Router, Route, Switch } from 'dva/router'
import TabBar from '@@/TabBar'
import './router.less'
export default function RouterConfig({ history, app }) {
  const [list, setlist] = useState([
    {
      id: 0,
      text: 'home',
      active: true,
      icon: 'icon-gouwuchekong',
      path: '/',
    },
    {
      id: 1,
      text: 'list',
      active: false,
      icon: 'icon-gouwuchekong',
      path: '/list',
    }
  ])
  
  return (
    <Router history={history}>
      <div className="basic" >
        <div className="basic_body">
        
            <Switch>
              <Route path="/" exact component={Cpt.Home} />
              <Route path="/list" exact component={Cpt.List} />
            </Switch>
          
        </div>
        <div className="basic_footer">
          <TabBar list={list}/>
        </div>
      </div>
    </Router>
  )
}


