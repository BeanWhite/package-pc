<template>
  <div
    class="m"
    :style="{color:(color?color:'white'),backgroundColor:getBgc,...getSize,...iRadius,fontSize:(fontSize?fontSize:'22px')}"
    @click="click"
  >
    <div class="m2">{{text?text:'按钮'}}</div>
  </div>
</template>

<script>
export default {
  props: ["color", "bgc", "size", "radius", "text", "fontSize"],
  data() {
    return {
      //设置默认尺寸
      iSize: {
        width: "120px",
        height: "50px"
      },
      //设置默认边框角度
      iRadius: {
        borderRadius: "5px"
      },
      dis: {}
    };
  },
  computed: {
    getBgc() {
      if (this.bgc) {
        return this.bgc;
      } else return null;
    },
    getSize() {
      return this.iSize;
    }
  },
  methods:{
    click(){
      this.$emit('click');
    }
  },
  mounted() {
      if(this.size==''){
          console.log(this)
      }
  }
};
</script>

<style scoped lang="less">
.m {
  display: inline-block;
  background-color: rgb(102, 165, 219);
  cursor: pointer;
}
.m2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>