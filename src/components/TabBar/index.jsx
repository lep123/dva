import React from 'react'
import { withRouter } from 'dva/router'
import Icon from '@@/Icon'
import cs from 'classnames'
import './style.less'
export default
@withRouter
class Home extends React.PureComponent {
    state = {
      list: this.props.list
    }
  onClick = options => {
    const { list } = this.state
   const arr = list.map(v => {
      v.id == options.id ? v.active = true : v.active = false 
      return v
   })
   this.setState({
     list: arr
   })
  
   this.props.history.push(options.path)
   
   
    
  }
  render () {
    const { list } = this.state
   
    return (
      <div className="comon-tabbar">
        {
          list.map(v => (
           
              <div 
                className={cs('comon-tabbar_item', {'tabbar_active': v.active})} 
                key={v.id}
                onClick={() => this.onClick(v)}
                >
                <Icon type={v.icon}/>
                 
                <p>{v.text}</p>
              </div>
           
          ))
        }
      </div>
    )
  }
}