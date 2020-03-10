import axios from 'axios'
import _ from 'loadsh'
import qs from 'qs'

let cancelToken = axios.CancelToken

const cancel = []
const removePending = config => {
	for (let p in cancel) {
		if (cancel[p].u === config.url) {
				cancel[p].f()
		}
	}
}

// 请求拦截器 发送一个请求之前
axios.interceptors.request.use(config => {
	//在一个ajax发送前执行一下取消操作

	removePending(config)
	config.cancelToken = new cancelToken(c => {
	
			cancel.push({
					f: c,
					u: config.url,
			})
	})

	return config
}, error => {
	console.log(error,111)
	return Promise.reject(error)
})

//添加响应拦截器
// axios.interceptors.response.use(response => {
// 	return response
// }, error => {
	
// 	console.log(error.response.status,1111)
// 	switch (_.get(error, 'response.status', '')) {
// 		case 504:
// 			console.log('您已经断网了....')
// 			// window.location.href = 'http://localhost:3000/home'
// 			break

// 		default:
// 			break
// 	}
	
// 	return Promise.reject(error)
// })

export function requestPost(url, action = {}) {

	return new Promise((resolve, reject) => {	
		axios({
			method: 'post',
			url,
			data: action,
		})
			.then(res => {
				resolve(res.data)
			
			})
			.catch(err => {
				reject(err)
			})
	})
}

export function requestGet(url, action = {}) {

	return new Promise((resolve, reject) => {
		axios({
			method: 'get',
			url,
			params: action,
		})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export function requestDelete(url, action = {}) {
	return new Promise((resolve, reject) => {
		axios({
			method: 'Delete',
			url,
			params: qs.stringify(action),
		})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}
