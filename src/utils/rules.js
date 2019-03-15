// 自定义验证规则
// 手机验证码
var phone = (rule, value, callback) => {
    if (!value) {
        return callback(new Error("手机号不能为空"));
    } else if (
        !/^1[34578]\d{9}$/.test(value) ||
        !(
            /^(5[1-6,9]|6[0-9]|9[0-8])\d{6}$/.test(value) ||
            !/^([0][9])\\d{8}$/.test(value)
        )
    ) {
        return callback(new Error("请输入正确的手机号码"));
    } else {
        callback();
    }
};
// 6位手机验证码
var verificationCode = (rule, value, callback) => {
    if (!value) {
        return callback(new Error("验证码不能为空"));
    } else if (!/\d{6}$/.test(value)) {
        return callback(new Error("请输入6位数字验证码"));
    } else {
        callback();
    }
};
export {
    phone as result_phone,
    verificationCode as result_verificationCode
};