<template>
	<Panel :class="$style.panel">
		<div :class="$style.cont">
			<span :class="$style.addBtn">+</span>
			<word-slide :slides="items" :options="options" class="wordslides"></word-slide>
			<course-show></course-show>
		</div>
	</Panel>
</template>
<script>
	import Panel from '../base/panel.vue';
	import wordSlide from '../base/wordslide.vue';
	import courseShow from './show.vue';
	export default {
		components: {
			Panel,
			wordSlide,
			courseShow
		},
		data () {
			return {
				items: [{
					text: '前端'
				}, {
					text: '运动健康'
				}, {
					text: '音乐乐器'
				}, {
					text: '文艺修养'
				}, {
					text: '摄影'
				}, {
					text: '投资理财'
				}, {
					text: '兴趣生活'
				}],
				options: {
		          slidesPerView: 3.4,
		          spaceBetween: 0,
		          freeMode: true,
		          pagination: {
		            // el: '.swiper-pagination',
		            clickable: true
        		  }
				}
			}
		}
    }
</script>

<style lang="scss" module>
	.panel {
		padding-left: 20px;
		> h2 {
			display: none;		
		}
		.cont {
			.addBtn {
				float: right;
				width: 88px;
				height: 92px;
				text-align: center;
				line-height: 92px;
				font-size: 48px;
				color: #777;
			}
		}
	}
</style>

<style lang="scss">
	.wordslides {
		.swiper-slide {
			width: auto !important;
			height: 96px !important;
			margin-right: 40px;
			line-height: 96px;
			a {
				text-decoration: none;
				color: #000;
			}
			.router-link-exact-active {
				font-size: 48px;
			}
		}
	}
</style>
