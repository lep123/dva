
import  HomeRequet from '@/services/home'
const { pathToRegexp } = require('path-to-regexp')
export default {

  namespace: 'home',

  state: {
    data: [],
    name: '小花',
  },

  subscriptions: {
    fetch ({ history, dispatch }) {
      history.listen(({ pathname }) => {
        console.log(pathToRegexp('/:id'))
        const regxp = pathToRegexp('/:id').test(pathname)
        if (regxp) {
          dispatch({type: 'fetch'})
        }
      })
     
    }
  },

  effects: {
    *fetch({ payload }, { call, put, select }) { 
      const oldData =  yield select(v => {
        return v.home.data
      })
      const data = yield call(HomeRequet.getHomeData, payload)
      yield put({ 
        type: 'getData',
        payload: [...oldData, ...data.result.list],
      })
    },
  },

  reducers: {
    getData(state, action) {
    
      return { ...state, data: action.payload }
    },
    setName(state, action) {
      return { ...state, name: action.payload }
    },
    
  },

};
