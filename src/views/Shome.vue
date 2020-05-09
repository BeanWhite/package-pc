<template>
  <div class="m">
    <div class="top">
      <div class="left">
        <span>标题</span>
        <div class="list">
          <div class="list-m">
            <mSearch
              :model="left.searchVal"
              v-on:updata="setVal"
              @focus="search"
              @input="search"
              @blur="focusout"
            ></mSearch>
            <div v-if="!left.isfocus" class="list-content scrollbar">
              <div
                class="list-item cursor"
                v-for="(it,index) in left.listItems"
                :key="index"
                :style="{backgroundColor:index%2==0?'#e4f1ff':''}"
                @click="itemSelect(index,0)"
              >
                <span>{{it.aiScaleName}}</span>
                <img src="../assets/svg/other/add.svg" alt="添加" />
              </div>
            </div>
            <!--显示搜索出来的内容 -->
            <div v-if="left.isfocus" class="list-content scrollbar">
              <div
                class="list-item cursor"
                v-for="(it,index) in left.searchItems"
                :key="index"
                :style="{backgroundColor:index%2==0?'#e4f1ff':''}"
                @click="itemSelect(index,1)"
              >
                <span>{{it.aiScaleName}}</span>
                <img src="../assets/svg/other/add.svg" alt="添加" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="a">
          <div class="title">
            <div>选择测评对象</div>
            <div>切换自评模块</div>
          </div>
          <el-input v-model.trim="right.search" @input="getUser" class="input" placeholder="请输入内容" >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="b">
          <div class="title">基础信息</div>
          <div class="b-m">
            <el-input v-model="right.msg.name" class="input" placeholder="请输入内容">
              <img
                class="el-input__icon"
                src="../assets/svg/msg_icons/user-red.svg"
                alt
                slot="prefix"
              />
              <div slot="prefix" class="input-title" style="color:black;">姓名：</div>
            </el-input>
            <el-dropdown class="input" @command="dropDownMenueSelect">
              <el-input
                v-model="right.msg.sex"
                placeholder="请输入内容"
                suffix-icon="el-icon-arrow-down"
              >
                <img class="el-input__icon" src="../assets/svg/msg_icons/sex.svg" alt slot="prefix" />
                <div slot="prefix" class="input-title" style="color:black;">性别：</div>
              </el-input>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(it,index) in right.dropDownMenue.sex"
                  :key="index"
                  :command="{index,value:'sex'}"
                >{{it}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-input
              v-model="right.msg.age"
              class="input"
              v-model.number="age"
              placeholder="请输入内容"
            >
              <img class="el-input__icon" src="../assets/svg/msg_icons/age.svg" alt slot="prefix" />
              <div slot="prefix" class="input-title" style="color:black;">年龄：</div>
            </el-input>
            <el-dropdown class="input" @command="dropDownMenueSelect">
              <el-input
                v-model="right.msg.edu"
                placeholder="请输入内容"
                suffix-icon="el-icon-arrow-down"
              >
                <img class="el-input__icon" src="../assets/svg/msg_icons/edu.svg" alt slot="prefix" />
                <div slot="prefix" class="input-title" style="color:black;">学历：</div>
              </el-input>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(it,index) in right.dropDownMenue.edu" :key="index" :command="{index,value:'edu'}">{{it}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="input" @command="dropDownMenueSelect">
              <el-input
                v-model="right.msg.marriage"
                placeholder="请输入内容"
                suffix-icon="el-icon-arrow-down"
              >
                <img
                  class="el-input__icon"
                  src="../assets/svg/msg_icons/heart.svg"
                  alt
                  slot="prefix"
                />
                <div slot="prefix" class="input-title" style="color:black;">婚姻：</div>
              </el-input>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(it,index) in right.dropDownMenue.marriage" :key="index" :command="{index,value:'marriage'}">{{it}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="input" @command="dropDownMenueSelect">
              <el-input
                v-model="right.msg.job"
                placeholder="请输入内容"
                suffix-icon="el-icon-arrow-down"
              >
                <img class="el-input__icon" src="../assets/svg/msg_icons/job.svg" alt slot="prefix" />
                <div slot="prefix" class="input-title" style="color:black;">职业：</div>
              </el-input>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(it,index) in right.dropDownMenue.job" :key="index" :command="{index,value:'job'}">{{it}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <el-input v-model="right.msg.office" class="input" placeholder="请输入内容">
              <img
                class="el-input__icon"
                src="../assets/svg/msg_icons/office.svg"
                alt
                slot="prefix"
              />
              <div slot="prefix" class="input-title" style="color:black;">科室：</div>
            </el-input>
            <el-dropdown class="input" @command="dropDownMenueSelect">
              <el-input
                v-model="right.msg.from"
                placeholder="请输入内容"
                suffix-icon="el-icon-arrow-down"
              >
                <img
                  class="el-input__icon"
                  src="../assets/svg/msg_icons/from.svg"
                  alt
                  slot="prefix"
                />
                <div slot="prefix" class="input-title" style="color:black;">来源：</div>
              </el-input>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(it,index) in right.dropDownMenue.from" :key="index" :command="{index,value:'from'}">{{it}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="c">
          <div class="title">选择量表</div>
          <div class="list">
            <div class="list-content scrollbar">
              <div
                class="list-item cursor"
                v-for="(it,index) in right.listItems"
                :key="index"
                :style="{backgroundColor:index%2==0?'#e4f1ff':''}"
                @click="itemRemove(index)"
              >
                <span>{{it.aiScaleName}}</span>
                <img src="../assets/svg/other/delete.svg" alt="添加" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <m-button @click="ReleaseTest"></m-button>
    </div>
  </div>
</template>

<script>
import MSearch from "../components/myComponents/mSearch.vue";
import axios from "../assets/apiData.js";
import MButton from "../components/myComponents/mButton.vue";
export default {
  data() {
    return {
      age: "",
      a: 999,
        originData:{//存放从服务器获取的原始数据
          msg:null
        },
      left: {
        searchVal: "", //搜索值
        listItems: [], //所有内容
        isfocus: false, //搜索框是否被聚焦
        searchItems: [] //搜索出来的内容
      },
      right: {
        listItems: [], //被选中的内容
        search:'',
        msg: {
          //基本信息模型
          id: "",
          name: "",
          sex: "",
          age: "",
          edu: "",
          marriage: "",
          job: "",
          office: "",
          from: ""
        },
        dropDownMenue: {
          //弹出列表
          sex: ["男", "女"],
          edu: ["小学", "初中", "高中/职中", "大专", "本科", "硕士", "博士"],
          job: [
            "计算机",
            "互联网",
            "通讯",
            "生产/工艺/制造",
            "医护/护理/制药",
            "金融/银行/投资",
            "保险",
            "商业/服务行",
            "文化/广告/传媒",
            "娱乐/艺术/表演",
            "律师/法务",
            "教育/培训",
            "公务员/事业单位",
            "模特",
            "空姐",
            "学生",
            "其它"
          ],
          marriage: ["是", "否"],
          from: ["门诊", "住院", "其它"]
        }
      }
    };
  },
  components: {
    MSearch,
    MButton
  },
  mounted() {
    this.left.listItems.splice(0);
    let that = this;
    async function init() {
      var data = await axios.banner.get("/scales/all");
      data = data.data.object;
      data.sort(that.sortList);
      if (data) that.left.listItems = data;
    }

    init();
  },
  methods: {
    //弹出菜单选中调用
    dropDownMenueSelect(e) {
      console.log(e)
      let index = e.index;
      let name = e.value;
      this.right.msg[name] = this.right.dropDownMenue[name][index];
      //console.log(this.right.dropDownMenue[n])
    },
    //对列表进行排序
    sortList(a, b) {
      return a.aiScaleId - b.aiScaleId;
    },
    //将搜索框的内容跟新到绑定对象中
    setVal(v) {
      v = v.replace(/\s*/g, "");
      this.left.searchVal = v;
    },
    //搜索框解除聚焦调用
    focusout() {
      if (this.left.searchVal == "" || this.left.searchVal == undefined) {
        this.left.isfocus = false;
      }

      console.log("离开");
    },
    //搜索框被聚焦或有输入值是调用
    search() {
      if (this.left.searchVal == "" || this.left.searchVal == undefined) {
        this.left.isfocus = false;
        return;
      }
      this.left.searchItems.splice(0);
      for (let i in this.left.listItems) {
        let t = this.left.listItems[i].aiScaleName.indexOf(this.left.searchVal);
        if (t > -1) {
          this.left.searchItems.push(this.left.listItems[i]);
          console.log(this.left.listItems[i]);
        }
      }
      this.left.isfocus = true;
      console.log("聚焦");
    },
    //根据用户id获取用户信息
    async getUser(){
      if(this.right.search==''||this.right.search==undefined){
        return
      }
      let data = await axios.banner.get('/users/msgForDoc/' + this.right.search);
      data = data.data;

      if(data.object){
        data = data.object;
        this.right.msg.id = this.right.search;
        this.right.msg.age = data.aiUserAge;
        this.right.msg.edu = data.aiUserEduBg.replace(/,/g,'/');
        this.right.msg.from = data.aiUserFrom;
        this.right.msg.marriage = data.aiUserMarriage;
        this.right.msg.sex = data.aiUserSex;
        this.right.msg.office = data.aiUserOffice;
        this.right.msg.job = data.aiUserProfession.replace(/,/g,'/');
        this.originData.msg = data;
      }else {
        this.originData.msg = null;
        Object.assign(this.right.msg,this.$options.data().right.msg)
        console.log(this.$options.data().right.msg)
      }
     
    },
    //添加数据
    itemSelect: function(e) {
      var k = this.left.listItems.splice(e, 1);
      this.right.listItems.push(k[0]);
    },
    //移除数据
    itemRemove: function(e) {
      var k = this.right.listItems.splice(e, 1);
      this.left.listItems.push(k[0]);
      this.left.listItems.sort(this.sortList);
    },
    //发布测验
    ReleaseTest(){
      console.log(this.$store)
      if(this.originData.msg==null){
        this.$message({
          showClose:true,
          message:'请选择测评对象',
          type:'warning',
          offset:window.screen.height/2,//设置距离顶部高度
          duration:1000,  //设置显示时长
        })
      }else{
        this.$confirm('确认信息无误?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发布成功!'
          });
          //从服务器上清空之前发布的内容缓存
          axios.banner.delete('/report/redis0/'+11);
         
         //判断信息是否发生了修改，如果修改需更新到服务器


         //将信息发送给移动端
          console.log(this.$router)

        }).catch(() => {
         //取消     
        });
      }
    }


  },
  watch: {
    // "left.searchVal":function(){
    //   console.log(this.left.searchVal)
    // }
  }
};
</script>

<style lang="less">
@color1: #e4f1ff;
input {
  text-align: center;
}
.input_width(@w: 200px) {
  width: @w;
}
.border-radius(@r: 5px) {
  border-radius: @r;
}
.border-line(@size:1px,@color:#DCDFE6,@type:solid) {
  border: @type @color @size;
}
.input-title {
  padding-left: 3px;
  display: inline-block;
  height: 100%;
  position: absolute;
  white-space: nowrap;
  line-height: 40px;
}
.m {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    .list-content {
      margin-top: 10px;
      padding-right: 20px;
      // height: 100%;
      width: calc(100% - 20px);
      overflow-y: overlay;
      overflow-x: hidden;
    }
    .list-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 5px;
      width: 100%;
      height: auto;
    }
    .left {
      width: 380px;
      min-width: 300px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .list {
        margin-top: 10px;
        height: calc(100% - 10px);
        background-color: white;
        width: 100%;
        .border-line();
        .border-radius();
        display: flex;
        justify-content: center;
        align-items: center;
        .list-m {
         
          height: calc(100% - 30px);
          width: calc(100% - 30px);
          display: flex;
          flex-direction: column;
        }
      }
    }
    .right {
      margin-left: 10px;
      width: calc(100% - 310px);
      height: 100%;
      min-width: 900px;
      // background-color: rgba(0, 139, 139, 0.904);
      display: flex;
      flex-direction: column;
      .a {
        width: 100%;
        display: flex;
        flex-direction: column;
        .input {
          .input_width(400px);
        }
      }
      .b {
        width: 100%;
        // background-color: lawngreen;
        .b-m {
          width: 100%;
          height: auto;
          display: flex;
          // background-color: lavender;
          justify-content: space-between;
          align-items: center;
          .border-line();
          .border-radius();
          flex-wrap: wrap;
          .input {
            .input_width(24%);
            margin: 5px;
          }
        }
      }
      .c {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .list {
          width: 100%;
          height: 100%;
          .border-line();
          .border-radius();
        }
      }

      .title {
        margin: 5px 0;
        width: calc(100%);
        height: auto;
        display: flex;
        justify-content: space-between;
        // background-color: thistle;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}
</style>