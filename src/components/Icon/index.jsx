import React from 'react'
import cs from 'classnames'
export default class extends React.PureComponent {
  render () {
    const { type, props } = this.props
    return (
      <span className={cs('iconfont', type )} {...props}></span>
    )
  }
}