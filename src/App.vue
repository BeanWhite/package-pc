<template>
  <div id="app">
    <b-g></b-g>
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import BG from './components/BackGround.vue'
export default {
  components:{
    BG
  }
}
</script>
<style lang="less">
.border-radius(@r: 5px){
  border-radius: @r;
}
html,body{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#nav {
  padding: 30px;
  
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/**
 * 滚动条
 */
.scrollbar{
	overflow-y: overlay;
	padding-right: 4px;
}
.scrollbar::-webkit-scrollbar{
	padding-left: 10px;
	width: 3px;
	background-color: white;
}
.scrollbar::-webkit-scrollbar-button{
	display: none;
}
.scrollbar::-webkit-scrollbar-thumb{
	background-color: darkgray;
}
.scrollbar::-webkit-scrollbar-corner{
	
}
/**
*鼠标指示
*/
.cursor{
  cursor: pointer;
}
</style>
