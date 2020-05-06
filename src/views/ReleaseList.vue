<template>
  <div class="main">
      <router-view/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.main {
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  position: relative;
  background-color: white;
  border-radius: 5px;
}
</style>