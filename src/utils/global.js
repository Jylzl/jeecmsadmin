// import Vue from 'vue'
import router from '@/router/index'
import {
    store
} from '@/store/index'
import service from "@/utils/request";
import api from "@/api/api";

var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generateMixed(n) {
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 35);
        res += chars[id];
    }
    return res;
}
export default {
    install(Vue, options) {
        console.log(options)
        Vue.prototype.$axios = service; //axios全局方法
        Vue.prototype.$api = api; //api地址全局方法
        /**
         * path 路径
         * params {}
         * id
         */
        Vue.prototype.routerLink = function () {
            let params = {};
            let path = arguments[0] ? arguments[0] : null;
            params['type'] = arguments[1] ? arguments[1] : null;
            params['id'] = arguments[2] ? arguments[2] : 0;
            params['noce_str'] = generateMixed(7);
            let obj = arguments[3] ? arguments[3] : null;

            if (obj != null) {
                try {
                    if (typeof obj == "object") {
                        for (let key in obj) {
                            params[key] = obj[key];
                        }
                    }
                } catch (error) {
                    throw error
                }
            }
            router.push({
                path: path,
                query: params
            })
        }
        //成功全局方法
        Vue.prototype.message = function (value, type) {
            type = type || 'warning';
            this.$message({
                showClose: true,
                message: type,
                type: type,
                duration: 1000
            });
        }
        Vue.prototype.successMessage = function (value) {
            this.$message({
                showClose: true,
                message: value,
                type: 'success',
                duration: 1000
            });
        }
        Vue.prototype.errorMessage = function (value) {
            this.$message({
                showClose: true,
                message: value,
                type: 'error',
                duration: 2500
            });
        }
        //获取站点ID
        Vue.prototype.$getSiteId = function () {
            return localStorage.getItem('_site_id_param');
        }
        //获取站点名称
        Vue.prototype.$getSiteName = function () {
            let sites = store.state.perms.siteItems;
            for (let site of sites) {
                if (site.id == this.$getSiteId()) {
                    return site.name;
                }
            }
            return '';
        }
        Vue.prototype.$getUrl = function () {
            let url = store.state.sys.baseUrl;
            let http = url.substring(0, url.indexOf("//") + 2);
            url = url.substring(url.indexOf("//") + 2, url.length);
            if (url.indexOf("/") >= 0) {
                url = url.substring(0, url.indexOf("/"));
            }
            return http + url;
        }
        Vue.prototype.$reset = function () {
            window.location.reload();
        }

        //获取当前时间
        Vue.prototype.$getNowDate = function () {
                var date = new Date();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = date.getFullYear() + "-" + month + "-" + strDate;
                return currentdate;
            },

            /**
             *@desc调换数组中指定下标相邻位置，返回更新好的数组
             *@param {Array} arr 指定数组        
             *@param {number} index 需要移动的对象的下标
             *@param {string} type 移动方式，提供上移（up），下移(down),默认为up
             */
            Vue.prototype.$switchArrOrder = function (arr, index, type = 'up') {
                if (type == 'up') {
                    arr.splice(index, 1, ...arr.splice(index - 1, 1, arr[index]));
                } else if (type == 'down') {
                    arr.splice(index, 1, ...arr.splice(index + 1, 1, arr[index]));
                }
                return arr;
            }
    }
}