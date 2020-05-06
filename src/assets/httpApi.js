/**
 * 封装的axios
 */

import axios from 'axios'
import qs from 'querystring'
import router from '../router'


//账号过期，跳转到登录页面
const toLogin = () => {
    router.push({
        path: '/login'
    })
}



//错误信息处理
const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log('信息校验失败');
            break;
        case 401:
            toLogin()
            console.log('认证失败');
            break;
        case 403: console.log('');
            toLogin();
            break;
        case 404: console.log('请求资源不存在');
            break;
        default: console.log(other);
            break;

    }
}

//创建axios实例
var instance = axios.create({
    timeout: 5000
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';/**设置表单方式提交 */
instance.defaults.headers.put['Content-Type'] ='application/x-www-form-urlencoded';
instance.defaults.headers.patch['Content-Type'] ='application/x-www-form-urlencoded';

//发送请求
instance.interceptors.request.use(function (config) {
    if (config.method == 'post'||config.method=='put'||config.method=='patch') {
        config.data = qs.stringify(config.data)
    }
    return config;
},function(error){
    return Promise.reject(error)
})

instance.interceptors.response.use(
    //请求成功
    res=>res.status===200?Promise.resolve(res):Promise.reject(res),

    //请求失败
    error=>{
        const {response} = error;
        if(response){
            errorHandle(response.status,response.data.message);
            return Promise.reject(response)
        }else{
            console.log('断网了');
        }
    }  
);
export default instance