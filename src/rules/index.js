/**
 * @description: 表单验证规则
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-04-19 13:09:37
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-06 14:45:36
 */
import request from '@/utils/request'
import api from "@/api/api"

function checkTagName(id) {
    return {
        validator: (rule, value, callback) => {
            request.post(api.wordTagCheckName, {
                id: id,
                name: value
            }).then(res => {
                if (res.code == '200') {
                    if (res.body.result) {
                        callback()
                    } else {
                        callback(new Error('名字已存在'));
                    }
                } else {
                    callback(new Error('服务器响应异常'));
                }
            })
        },
        trigger: 'blur'
    }
}

//必填
function required(message, trigger) {
    return {
        required: true,
        validator: (rule, value, callback) => {
            const reg = new RegExp(/^\s*$/g);
            if (reg.test(value)) {
                callback(new Error(message || '此项必填'));
            } else {
                callback();
            }
        },
        trigger: trigger || 'blur',
        message: message || '此项必填'
    }
}

//非必填
function notRequired() {
    return {
        required: false,
        validator: (rule, value, callback) => {
            callback();
        },
        trigger: 'blur',
        message: ''
    }
}

//用户名唯一
function validateName(message) {
    return {
        validator: (rule, value, callback) => {
            request.post(api.validateName, {
                username: value
            }).then(res => {
                if (res.code == '200') {
                    if (res.body.result) {
                        callback()
                    } else {
                        callback(new Error(message || '用户名已存在'));
                    }
                } else {
                    callback(new Error('服务器响应异常'));
                }
            })
        },
        trigger: 'blur'
    }
}

//栏目路径
function channelPath(message, id) {
    return {
        validator: (rule, value, callback) => {
            request.post(api.channelCheckPath, {
                id: id,
                path: value
            }).then(res => {
                if (res.code == '200') {
                    if (res.body == 'true') {
                        callback()
                    } else {
                        callback(new Error(message || '栏目路径已存在'));
                    }
                } else {
                    callback(new Error('服务器响应异常'));
                }
            })
        },
        trigger: 'change'
    }
}

function checkModeId(message) {
    return {
        validator: (rule, value, callback) => {
            if (value !== '') {
                request.post(api.modelCheckId, {
                    id: value
                }).then(res => {
                    if (res.code == '200') {
                        if (res.body.result == false) {
                            callback(new Error(message || 'id已存在'))
                        } else {
                            callback();
                        }
                    } else {
                        callback(new Error('验证失败'));
                    }
                })
            }
        },
        trigger: 'blur'
    }
}

//email
function email(message) {
    return {
        validator: (rule, value, callback) => {
            if (value === '') {
                callback();
            }
            let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            if (!reg.test(value)) {
                callback(new Error(message || '请输入正确的邮箱地址'));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

//数字
function number(message) {
    return {
        validator: (rule, value, callback) => {
            if (value === '') {
                callback();
            }
            let reg = /^[0-9]+$/;
            if (!reg.test(value)) {
                callback(new Error(message || '只能输入数字'));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

//不能为空
function space(message) {
    return {
        validator: (rule, value, callback) => {
            if (value.trim() === '') {
                callback(new Error(message || '不能为空'));
            }
        },
        trigger: 'blur'
    }
}

//数字且大小在100-300
function qrcode(message) {
    return {
        validator: (rule, value, callback) => {
            if (value === '') {
                callback();
            }
            let reg = /^([1-2]\d{2}|300)$/;
            if (!reg.test(value)) {
                callback(new Error(message || '只能输入数字且大小在100-300之间'));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

//数字且大小在1-19
function minNumber(message) {
    return {
        validator: (rule, value, callback) => {
            if (value === '') {
                callback();
            }
            let reg = /^([1-9]|1\d)$/;
            if (!reg.test(value)) {
                callback(new Error(message || '只能输入数字且大小在1-19之间'));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

//级别  小于等于自身
function level(val) {
    return {
        validator: (rule, value, callback) => {
            if (value > val) {
                callback(new Error("只能小于等于自身"));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

//浮点型数字
function double(message) {
    return {
        validator: (rule, value, callback) => {
            let reg = /[0-9]+$/;
            if (!reg.test(value)) {
                callback(new Error(message || "只能是数字"));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

//数字限制最大长度
function numberLim(message) {
    return {
        validator: (rule, value, callback) => {
            let reg = /^[0-9]{0,5}$/;
            if (!reg.test(value)) {
                callback(new Error(message || "只能输入正整数,并且长度不能超过5"));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

//只能输入英文或数字
function string(message) {
    return {
        validator: (rule, value, callback) => {
            let reg = /^[a-zA-Z0-9]+$/;
            if (!reg.test(value)) {
                callback(new Error(message || '只能输入英文或数字'));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

//只能小写字母或者数字
function NumAndStr(message) {
    return {
        validator: (rule, value, callback) => {
            let reg = /^[a-z0-9]+$/;
            if (!reg.test(value)) {
                callback(new Error(message || '只能是小写字母和数字'));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }

}

// 6位手机验证码
function verificationCode() {
    return {
        validator: (rule, value, callback) => {
            if (!value) {
                return callback(new Error("验证码不能为空"));
            } else if (!/\d{6}$/.test(value)) {
                return callback(new Error("请输入6位数字验证码"));
            } else {
                callback();
            }
        }
    }
}

//移动手机号
function mobile(message) {
    return {
        validator: (rule, value, callback) => {
            if (value === '') {
                callback();
            } else {
                let reg = /^1\d{10}$/;
                if (!reg.test(value)) {
                    callback(new Error(message || '请输入正确的手机号'));
                } else {
                    callback();
                }
            }
        },
        trigger: 'blur'
    }
}

//固定电话
function tel(message) {
    return {
        validator: (rule, value, callback) => {
            if (value === '') {
                callback();
            } else {
                let reg = /^0\d{2,3}-?\d{7,8}$/;
                if (!reg.test(value)) {
                    callback(new Error(message || '请输入正确的固定电话'));
                } else {
                    callback();
                }
            }
        },
        trigger: 'blur'
    }
}


// 中文数据验证 --ASCII码
function checkChinese(message) {
    return {
        validator: (rule, value, callback) => {
            var flag = true;
            for (var i = 0; i < value.length; i++) {
                if (value.charCodeAt(i) > 255) {
                    callback(new Error(message || '不能含有汉字'));
                    flag = false;
                    break;
                }
            }
            if (flag) {
                callback();
            }
        },
        trigger: 'blur'
    }
}

// URL格式验证
function isURL(message) {
    return {
        validator: (rule, value, callback) => {
            const reg = new RegExp("^(http://|https://).*$");
            if (!reg.test(value)) {
                callback(new Error(message || 'URL格式不正确!'));
            } else {
                callback();
            }
        },
        trigger: 'blur'
    }
}

export default {
    required,
    notRequired,
    email,
    number,
    space,
    qrcode,
    validateName,
    NumAndStr,
    verificationCode,
    mobile,
    tel,
    string,
    channelPath,
    numberLim,
    double,
    checkModeId,
    level,
    checkTagName,
    minNumber,
    checkChinese,
    isURL,
}