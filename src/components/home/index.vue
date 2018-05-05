<template>
	<div :class="$style.wrapper">
		<header :class="$style.header">
			<tc-download></tc-download>
			<tc-header></tc-header>
		</header>
		<section :class="$style.content">
			<tc-slide></tc-slide>
			<tc-notice></tc-notice>
			<tc-course></tc-course>
		</section>
		<tc-navbar></tc-navbar>
	</div>
	
</template>
<script>
	import tcDownload from './download.vue';
	import tcSlide from './home-slide.vue';
	import tcNotice from './notice.vue';
	import tcHeader from '../public/header.vue';
	import tcCourse from './course.vue';
	import tcNavbar from '../public/navbar.vue';
	export default {
		components: {
			tcHeader,
			tcDownload,
			tcSlide,
			tcNotice,
			tcCourse,
			tcNavbar
		}
    }
</script>

<style lang="scss" module>
	.header {
		position: fixed;
		z-index: 10;
		top: 0; 
		left: 0;
		width: 100%;
		background: #fff;

	}
	.content {
		margin-top: 190px;
		margin-bottom: 120px;
	}
</style>