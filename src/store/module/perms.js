/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-10 08:36:23
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-10 10:35:50
 */
import {
    routes,
    ansycRoutes
} from '@/router/routes'
import {
    loginOut,
    getPerms
} from "@/api/land.js";

/**
 * 递归处理角色权限
 */
function getansycRoutes(tmpRoutes, perms) {
    let aa = perms.split(',');
    const result = tmpRoutes.filter(route => {
        if (aa.indexOf(route.path) != -1) {
            if (route.children != undefined) {
                let cc = aa.join(',');
                route.children = getansycRoutes(route.children, cc);
            }
            return true;
        }
        return false;
    })
    return result
}
const perm = {
    state: {
        routers: routes,
        addRouters: [],
        perms: false, //判断是否刷新过页面,
        permsList: null,
        _site_id_param: '', //站点id
        siteItems: [],
        isMasterSite: true,
        baseUrl: ''
    },
    mutations: {
        SET_ROUTERS: (state, obj) => {
            state.routers = routes.concat(obj.asRouters); //设置路由表
            state.addRouters = obj.asRouters; //动态路由表
            state.perms = true; //登录状态
            state.permsList = obj.permsList; //权限字符串 
            state._site_id_param = obj.siteId; //站点id
            state.siteItems = obj._site_id_param;
            state.isMasterSite = obj.isMasterSite;
            state.baseUrl = obj.baseUrl
            let arr = [];
            for (let i in obj._site_id_param) { //站点id 数组
                arr.push(obj._site_id_param[i].id);
            }
            let local_site_id_param = localStorage.getItem('_site_id_param');
            if (local_site_id_param) {
                let isBeing = arr.indexOf(parseInt(local_site_id_param))
                if (isBeing >= 0) {
                    localStorage.setItem('_site_id_param', local_site_id_param);
                } else {
                    localStorage.setItem('_site_id_param', state._site_id_param);
                }
            } else {
                localStorage.setItem('_site_id_param', state._site_id_param);
            }
        },
        CLEAR_ROUTERS: (state) => {
            state.routers = routes;
            state.addRouters = [];
            state.perms = false;
            state.permsList = null;
            state._site_id_param = null;
            localStorage.setItem('sessionKey', '');
            localStorage.setItem('userName', '');
        }
    },
    actions: {
        setRouters({
            commit
        }) {
            return new Promise((resolve, reject) => {
                //动态加载路由权限
                getPerms().then(res => {
                    let asRouters = [];
                    if (res.body.perms == '*') {
                        asRouters = ansycRoutes;
                    } else {
                        //递归过滤
                        asRouters = getansycRoutes(ansycRoutes, res.body.perms);
                    }
                    commit('SET_ROUTERS', {
                        asRouters: asRouters,
                        permsList: res.body.perms,
                        _site_id_param: res.body.sites,
                        siteId: res.body.siteId,
                        isMasterSite: res.body.isMasterSite,
                        baseUrl: res.body.url
                    });
                    resolve(res);
                }).catch(error => {
                    reject(error);
                })
            })
        },
        loginOut({
            commit
        }) {
            return new Promise((resolve, reject) => {
                loginOut().then(res => {
                    if (res.code == '200') {
                        commit('CLEAR_ROUTERS');
                    }
                    resolve(res);
                }).catch(error => {
                    reject(error);
                })
            })
        }
    }

}

export default perm