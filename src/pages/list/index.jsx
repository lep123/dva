import React from 'react'
import BreadCrumbs from '@@/BreadCrumbs'

import './style.less'

export default class extends React.Component {
  render () {
    const data = [
      {id: 0, name: '首页', path: '/', icon: 'icon-shoucang'},
      {id: 1, name: '列表', icon: 'icon-shoucang'},
      
    ]
    return (
      <div className='pages_list'>
        <h1>list 页面 ____ </h1>
        <BreadCrumbs 
          title="标题"
          data={data}    // 数据
          delimiter='@'  // 分隔符
          style={{fontSize: '20px'}} 
          iconFont={{fontSize: '18px'}}
        />
      </div>
    )
  }
}