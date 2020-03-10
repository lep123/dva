import React from 'react'
import Icon from '@@/Icon'
import { withRouter } from 'dva/router'
import './style.less'

export default @withRouter
class BreadCrumbs extends React.PureComponent {
  onClick = (path, evt) => {
    
     evt.preventDefault()
    this.props.history.push(path)
  }
  render () {
    const { title, data, separator = '/', iconFont, style } = this.props
    return (
      <div className="bread-crumbs">
          <string>{title && `${title}:`}</string>
          {
            data.map(({ id, name, path, icon }, key) => {
              if (path) {
                return (
                  <React.Fragment key={key}>
                    
                    <a href="#" onClick={ evt => this.onClick(path, evt)}>
                      <Icon type={icon} style={iconFont}/>
                      {name}
                    </a>
                    <span>{separator}</span>
                  </React.Fragment>
                )
                  
              } else {
                return  <em key={key}>
                   <Icon type={icon}/>
                  {name}
                </em>
              }
              
            })
          }
      </div>
    )
  }
}