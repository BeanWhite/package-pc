import Vue from 'vue'
import Vuex from 'vuex'
import apiData from "../assets/apiData";
Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * 发布环境关闭严格模式
   */
  strict: process.env.NODE_ENV !== 'production',

  /**
   * 存放数据
   */
  state: {
    //医生信息模型
    doc: {
      id: '',
      name: '',
      pwd: '',
      inLine: false,//是否已登录
      test: false,//定义账号是否为测试
    },
    //病人信息模型
    user: {

    },
    //报告信息模型
    report: {
      date: null,//发布测评的时间
      reportContent: []
    },
    //测试路由视图模型
    routerViewModel: {
      index: null,//当前位置索引
      pathName: null,  //路径名称
      views: [], //存放发布测评的量表信息
    },

    //websocket对象
    websocket: null,
    websocketData: null,
  },
  /**
   * 同步方法
   * 提交方法，用于更新state数据，对应commit，不能进行异步提交
   * 方法只能有两个参数，第一个为state，第二个为payload对象或具体值
   */
  mutations: {
    //设置医生信息
    setDoc(state, payload) {
      state.doc.id = payload.id;
      state.doc.name = payload.name;
      state.doc.pwd = payload.pwd;
      state.doc.inLine = true;
    },
    open(state) {
      state.websocket = apiData.banner.linkToWebSocket('/' + state.doc.id);
      console.log('连接')
    },
    onmessage(state, payload) {
      state.websocketData = JSON.parse(payload)
    },
    send(state, payload) {
      state.websocket.send(JSON.stringify(payload))
    }



  },
  /**
   * 异步方法
   * 向mutations提交数据，实现转发，通过转发可以实现异步提交
   */
  actions: {
    //建立websocket连接
    linksocket({ commit, state }) {
      commit('open');

      if (state.websocket != null) {
        console.log('等待')
        state.websocket.onmessage = function (e) {
          commit('onmessage', e.data)
        };
      }
      //state.websocket = new WebSocket();
    },
    //通过websocket发送消息
    send(state, payload) {
      state.websocketData.send(JSON.stringify(payload))
    }

  },
  /**
   * 
   */
  modules: {


  },
  /**
   * 计算属性
   */
  getters: {
    /**
     * @test 
     * 默认有一个state参数，直接对应state状态
     */
    getT: state => {
      return state.doc
    }
  }
})
