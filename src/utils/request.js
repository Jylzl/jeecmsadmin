import axios from 'axios'
import qs from 'qs'
import router from '@/router/index'
import {
	Message
} from 'element-ui'
import {
	getRand
} from '@/utils/random'
// import {
//   store
// } from '@/store/index.js';
import {
	signParams
} from "@/utils/aes.js";
// import {
//   getToken
// } from '@/utils/auth'

function showMessage(value) {
	return Message({
		showClose: true,
		message: value,
		type: 'error',
		duration: 3500
	});
}

// create an axios instance
const service = axios.create({
	withCredentials: true,
	baseURL: process.env.VUE_APP_SERVER_API, // api 的 base_url
	timeout: 5000 // request timeout
})

// request interceptor（请求拦截器）
service.interceptors.request.use(
	config => {
		// Do something before request is sent
		let appId = process.env.VUE_APP_appId; //appid
		let appKey = process.env.VUE_APP_appKey; //appkey
		let sessionKey = localStorage.getItem('sessionKey'); //sessionkey
		let _site_id_param = localStorage.getItem('_site_id_param') || ''; //站点id
		let params = {
			appId: appId, //appid
			nonce_str: getRand(), //随机数
			_site_id_param: _site_id_param
		};
		if (sessionKey && sessionKey != '') {
			params.sessionKey = sessionKey;
		}
		for (let key in config.data) {
			params[key] = config.data[key]; //添加进参数列表
		}
		params = signParams(params, appKey); //返回签名后的对象
		config.data = qs.stringify(params); //序列化
		return config
	},
	error => {
		// Do something with request error
		Promise.reject(error)
	}
)

// response interceptor（响应拦截器）
service.interceptors.response.use(
	// response => response,
	/**
	 * 下面的注释为通过在response里，自定义code来标示请求状态
	 * 当code返回如下情况则说明权限有问题，登出并返回到登录页
	 * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
	 * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
	 */
	response => {
		const res = response.data;
		switch (res.code) {
			case '200':
				break;
			case '301':
				break;
			case '304':
				break;
			case '3':
			case '302':
				showMessage(res.code + ":" + res.message);
				localStorage.setItem('sessionKey', '');
				localStorage.setItem('userName', '');
				router.push('/login');
				break;
			default:
				showMessage(res.code + ":" + res.message);
				break;
		}
		return response.data;
	},
	error => {
		showMessage('服务器响应失败');
		return Promise.reject(error)
	}
)

export default service