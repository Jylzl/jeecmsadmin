import {
	Encrypt
} from "@/utils/aes.js";
import {
	login
} from "@/api/land.js";
//展示的用户信息
const user = {
	state: {
		//设置属性
		userName: '',
		localLanguage: 'zh'
	},
	mutations: {
		//改变属性的状态
		LOGING_STATE: (state, params) => {
			localStorage.setItem('sessionKey', params);
			localStorage.setItem('localLanguage', 'zh');
			state.localLanguage = 'zh';
			state.userName = localStorage.getItem('userName');
		}
	},
	actions: {
		//应用mutaions
		userLogin({
			commit
		}, data) { //登录异步操作
			var landInf = data.loginForm;
			let userName = landInf.user;
			let password = Encrypt(landInf.pswd, process.env.VUE_APP_aesKey, process.env.VUE_APP_ivKey); //加密
			return new Promise((resolve, reject) => {
				login({
						username: userName,
						aesPassword: password
					})
					.then(res => {
						if (res.code == '200') {
							localStorage.setItem('userName', userName); //登陆成功将用户名存入localStorage
							commit('LOGING_STATE', res.body); //将返回的sessionKey存起来
						}
						resolve(res)
					})
					.catch(err => {
						console.log(err)
						reject(false);
					});
			});
		}
	}
}
export default user