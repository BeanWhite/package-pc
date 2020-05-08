<template>
  <div class="mywindow">
    <div class="router-box">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.mywindow {
  width: calc(100% - 120px);
  height: calc(100% - 120px);
  background-color: white;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  .router-box{
    height: calc(100% - 40px);
    width: calc(100% - 40px);
    margin:20px;
  }
}
</style>