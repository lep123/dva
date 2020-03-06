
import axios from 'axios'
export default {

  namespace: 'home',

  state: {
    data: [],
    name: '小花',
  },

  

  effects: {
    *fetch({ payload }, { call, put }) { 
      const fn = () => {
        return axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage')
      }
       const { data } = yield call(fn)
         
         yield put({ 
         type: 'getData',
         payload: data.result.list,
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
