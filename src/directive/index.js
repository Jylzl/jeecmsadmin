import Vue from 'vue'
import {
    store
} from "@/store/index.js";

function checkPerms(perms, perm) {
    if (perm != null && typeof (perm) == 'object') {
        let key = true;
        perm.map((permkey) => {
            key = key && perms.some((item) => {
                return item == permkey
            })
        })
        return key;
    } else if (typeof (perm) == 'string') {
        return perms.some((item) => {
            return item == perm
        })
    }
}

Vue.directive("perms", {
    bind(el, binding) {
        let perms = store.state.perms.permsList; //按钮权限指令
        if (perms != '*') {
            //验证权限不通过则删除元素
            if (checkPerms(perms, binding.value)) {
                return false
            } else {
                el.parentNode.removeChild(el);
            }
        } else {
            return false
        }
    }
});