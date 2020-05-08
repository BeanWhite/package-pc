import axios from './httpApi'
const base = {
    //baseUrl: 'http://localhost:88',
    baseUrl:'http://122.112.225.219:88',
    wsBaseUrl:'ws://122.112.225.219:88/websocket',
    //wsBaseUrl:process.env.NODE_ENV === 'production' ? 'ws://122.112.225.219:88/websocket' : 'ws://localhost:88/websocket',
//    baseUrl:process.env.NODE_ENV === 'production' ? 'http://122.112.225.219:88' : 'http://localhost:88',
    banner: '/t/t2'
}

const banner = {
    get(url, hasBase) {
        if (hasBase)
            return axios.get(url)
        else
            return axios.get(base.baseUrl + url)
    },
    post(data, url, hasBase) {
        if (hasBase)
            return axios.post(url, data)
        else
            return axios.post(base.baseUrl + url, data)
    },
    put(data, url, hasBase) {
        if (hasBase)
            return axios.put(url, data)
        else
            return axios.put(base.baseUrl + url, data)
    },
    delete(url, hasBase) {
        if (hasBase)
            return axios.delete(url)
        else
            return axios.delete(base.baseUrl + url)
    },
    patch(data, url, hasBase) {
        if (hasBase)
            return axios.patch(url, data)
        else
            return axios.patch(base.baseUrl + url, data)
    },
    head(url, hasBase) {
        if (hasBase)
            return axios.head(url)
        else
            return axios.head(base.baseUrl + url)
    },
    options(url, hasBase) {
        if (hasBase)
            return axios.options(url)
        else
            return axios.options(base.baseUrl + url)
    },
    linkToWebSocket(url,hasBase){
        if(hasBase)
        return new WebSocket(url);
        else return new WebSocket(base.wsBaseUrl+url);
    }
}

export default {
    banner
}
