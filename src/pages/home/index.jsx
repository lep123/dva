import React from 'react'
import { connect } from 'dva'
import  './style.less'
@connect(({ home }) => ({
  data: home.data,
  name: home.name
}))
export default class extends React.PureComponent {
  page = 1
  componentDidMount () {
    const { dispatch } = this.props
    // dispatch({
    //   type: 'home/fetch',
    //   payload: {
    //     page: this.page++
    //   }
    // })
  }
  onClick = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/fetch',
      payload: {
        page: this.page++
      }
    })
  }
  render () {
    const { data, name } = this.props
  
    
    
    return (
      <div className="pages_home">
        {
          // data.map( v => (
          //   <div key={v.id}>{v.title}</div>
          // ))
          data.length
        }
        <button onClick={this.onClick}>点我</button>
      </div>
    )
  }
}