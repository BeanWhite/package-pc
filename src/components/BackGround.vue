<template>
  <div class="satic-area">
    <div class="dynamic-area1"></div>
    <div class="dynamic-area2"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.satic-area {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -100;
	width: 100vw;
	height: 100vh;
	background: url(../assets/img/poster-about.jpg) repeat center;
	background-size: cover;
}

.dynamic-area1 {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	/* background: url(../img/poster-drop-animate2.png) repeat-x 0px 0px; */
	background-size: cover;
	animation: posterDrop1 6000s linear infinite;
}

@keyframes posterDrop1 {
	from {
		background-position: 0 0;
	}

	to {
		background-position: 4000% 0;
	}
}

.dynamic-area2 {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: url(../assets/img/poster-drop-animate1.png) repeat-x 0px 0px;
	background-size: cover;
	animation: posterDrop2 8000s linear infinite;
}

@keyframes posterDrop2 {
	from {
		background-position: 0 0;
	}

	to {
		background-position: 30000% 0;
	}
}


.menue-icon-list {
	display: flex;
}

.menue-icon-item{
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	margin-right: 5px;
}
.menue-icon-item img{
	width: calc(100% - 10px);
	height: calc(100% - 10px);
}
.bgc-red{
	background-color: #D93838;
}

.bgc-blue{
	background-color: #3185BB;
}
</style>