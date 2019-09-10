/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 15:53:28
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-05 15:53:28
 */
import {
	setBaseUrl
} from '@/config/config.js'
const systemConfig = {
	state: {
		pwdCollapse: false,
		collapse: false,
		asideWidth: '220px',
		baseUrl: setBaseUrl(),
		resourceUpLoad: setBaseUrl() + '/api/admin/resource/upload',
		templateUpLoad: setBaseUrl() + '/api/admin/template/upload',
		importTpl: setBaseUrl() + '/api/admin/template/importTpl',
	},
	mutations: {
		CHANGE_SET: (state, value) => {
			if (value == undefined) {
				state.collapse = !state.collapse;
			} else {
				state.collapse = value ? true : false;
			}
			state.asideWidth = state.collapse ? '65px' : '220px';
		},
		PWD_SET: (state, value) => {
			state.pwdCollapse = value;
		}
	},
	actions: {
		setCollapse({
			commit
		}, value) {
			commit('CHANGE_SET', value);
		},
		setPwd({
			commit
		}, value) {
			commit('PWD_SET', value);
		}
	}
}

export default systemConfig