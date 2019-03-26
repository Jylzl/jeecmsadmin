import CryptoJS from "crypto-js";

//解密方法
export function Decrypt(word, aesKey, ivKey) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let key = CryptoJS.enc.Utf8.parse(aesKey); //十六位十六进制数作为密钥
    let iv = CryptoJS.enc.Utf8.parse(ivKey); //十六位十六进制数作为密钥偏移量
    let decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

//加密方法
export function Encrypt(word, aesKey, ivKey) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let key = CryptoJS.enc.Utf8.parse(aesKey)
    let iv = CryptoJS.enc.Utf8.parse(ivKey)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    // return encrypted.ciphertext.toString().toUpperCase(); //大写
    return encrypted.ciphertext.toString();
}


export function createSign(params, key) {
    params = params.sort();
    var paramVals = "";
    for (var i = 0; i < params.length; i++) {

        if ((typeof params[i][1]) != 'object' && params[i][1] !== null && params[i][1] !== undefined && params[i][1] !== '') {
            paramVals += params[i][0] + "=" + params[i][1] + "&";
        }
    }
    //加上app key[后台配置API的account key]
    paramVals += "key=" + key;

    //MD5加密
    var hash = CryptoJS.MD5(paramVals);
    //转换大写
    return (("" + hash).toUpperCase());
}


export function signParams(params, appKey) {
    // let len = Object.getOwnPropertyNames(params).length;
    let arr = [];
    for (var key in params) {
        let tmp = [key, params[key]];
        arr.push(tmp)
    }
    let sign = createSign(arr, appKey);
    params.sign = sign;
    return params
}