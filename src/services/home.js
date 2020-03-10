import Api from './api'
import { requestPost } from '@/utils/request'
const getHomeData = options => requestPost(Api.getHomeData, options)
export default {
  getHomeData,
}
