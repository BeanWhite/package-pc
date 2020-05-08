<template>
  <div class="m">
    <img src="../../assets/svg/other/search.svg" alt />
    <input v-model="getM"  type="text" class="input" :placeholder="placeholder?placeholder:'请输入内容'" @blur="blur()"  @focus="focus()"  @input="input()"/>
  </div>
</template>

<script>
export default {
  name: "MSearch",
  props: ["placeholder","model"],
  computed:{
      getM:{
         get(){
             return this.model;
         },
         set(val){
            this.$emit("updata",val)
         }
      }
  },
  mounted(){
    
  },
  methods:{
      focus:function(){
          this.$emit("focus");
      },
      input:function(){
          this.$emit("input");
      },
      blur:function(){
        this.$emit('blur');
      }
  }
};
</script>

<style lang="less" scoped>
@color:#dcdfe6;
.m {
  display: inline-block;
  border: solid 1px @color;
  background-color: white;
  border-radius: 20px;
  height: 40px;
  padding: 1px;
  overflow: hidden;
  display: flex;
  .input {
    border: none;
    outline: none;
    height: calc(100% - 2px);
    width: 100%;
    margin-left: 5px;
    margin-right: 15px;
  }
  img{
      margin-left: 10px;
  }
}
input::placeholder{
    color: @color;
}
</style>