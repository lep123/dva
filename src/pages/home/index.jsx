import React from 'react'
import { connect } from 'dva'
import  './style.less'
@connect(({ home }) => ({
  data: home.data,
  name: home.name
}))
export default class extends React.PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch({type: 'home/fetch'})
  }
  render () {
    const { data, name } = this.props
  
   
    
    return (
      <div className="pages_home">
        {
          data.map( v => (
            <div key={v.id}>{v.title}</div>
          ))
        }
      </div>
    )
  }
}