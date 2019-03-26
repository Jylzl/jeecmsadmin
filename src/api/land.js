import request from '@/utils/request'
import api from '@/api/api';

// 用户登陆接口
export function login(data) {
    return request({
        url: api.userLogin,
        method: 'post',
        data
    })
}

// 退出登陆
export function loginOut(data) {
    return request({
        url: api.loginOut,
        method: 'post',
        data
    })
}