<template>
	<section :class="cname">
		<swiper :class="$style.swipers">
			<swiperSlide 
				:class="$style.slides" 
				v-for="item in slides"
				:key="item.text"
			>
				<router-link :to="{path: '/home', query: {course: item.text}}">{{item.text}}</router-link>
			</swiperSlide>
		</swiper>	
	</section>
	
</template>


<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
	components: {
		swiper,
		swiperSlide
	},
	props: {
		cname: {
			type: String,
			default: ''
		},
		options: {
			type: Object,
			default () {
				return {
					
				}
			}
		},
		slides: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			
		}
	}
}
</script>

<style lang="scss">
	@import '~swiper/dist/css/swiper.css';
	
</style>
<style lang="scss" module>
	.swipers {
		width: 520px;
		height: 92px;
		margin: 0;
		line-height: 92px;
		text-align: center;
		.slides {
			position: relative;
			width: auto !important;
			height: 100%;
			margin-right: 60px;
			font-size: 28px;
			&:hover {
				font-size: 56px;
				&::before {
					content: '.';
					position: absolute;
					bottom: 10px;
					left: 0;
					right: 0;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background-color: #23b8ff;
					margin: auto;
				}
			}
			a {
				text-decoration: none;
				color: #000;
			}
		}
	}
</style>