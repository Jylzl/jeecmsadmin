export function setBaseUrl(state) {
    let apiUrl = '';
    //判断是否分离部署
    if (process.env.VUE_APP_NODE_DEPLOY == 'separate') {
        //分离部署
        apiUrl = process.env.VUE_APP_SERVER_API;
    } else {
        //非分离部署
        apiUrl = 'http://' + process.env.VUE_APP_APP_HOST + ':' + process.env.VUE_APP_APP_PORT;
    }
    return apiUrl;
};