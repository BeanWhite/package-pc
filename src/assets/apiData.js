import axios from './httpApi'
const base = {
    //baseUrl: 'http://localhost:88',
    baseUrl:'http://122.112.225.219:88',
    wsBaseUrl:'ws://122.112.225.219:88/websocket',
    //wsBaseUrl:process.env.NODE_ENV === 'production' ? 'ws://122.112.225.219:88/websocket' : 'ws://localhost:88/websocket',
//    baseUrl:process.env.NODE_ENV === 'production' ? 'http://122.112.225.219:88' : 'http://localhost:88',
    banner: '/t/t2'
}

/**
 * url 请求地址
 * data 发送的数据
 * hasBase 请求地址头是否为默认
 */
const banner = {
    get(object) {
        
        if (object.hasBase)
            return axios.get(object.url)
        else
            return axios.get(base.baseUrl + object.url)
    },
    post(object) {
        if (object.hasBase)
            return axios.post(object.url, object.data)
        else
            return axios.post(base.baseUrl + object.url, object.data)
    },
    put(object) {
        if (object.hasBase)
            return axios.put(object.url, object.data)
        else
            return axios.put(base.baseUrl + object.url, object.data)
    },
    delete(object) {
        if (object.hasBase)
            return axios.delete(object.url)
        else
            return axios.delete(base.baseUrl + object.url)
    },
    patch(object) {
        if (object.hasBase)
            return axios.patch(object.url, object.data)
        else
            return axios.patch(base.baseUrl + object.url, object.data)
    },
    head(object) {
        if (object.hasBase)
            return axios.head(object.url)
        else
            return axios.head(base.baseUrl + object.url)
    },
    options(object) {
        if (object.hasBase)
            return axios.options(object.url)
        else
            return axios.options(base.baseUrl + object.url)
    },
    linkToWebSocket(object){
        if(object.hasBase)
        return new WebSocket(object.url);
        else return new WebSocket(base.wsBaseUrl+object.url);
    }
}

export default {
    banner
}
