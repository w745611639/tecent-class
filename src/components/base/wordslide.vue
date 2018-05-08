<template>
	<section>
		<swiper 
			:options="options"
			:not-next-tick="options.notnextTick"
			>
			<swiper-slide 
				v-for="item in slides"
				:key="item.text"
			>
				<router-link :to="{path: '/home', query: {course: item.text}}">{{item.text}}</router-link>
			</swiper-slide>
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
					autoplay: true,
					autoplayDisableOnInteraction : false,
					loop: true,
					pagination: {
						el: '.swiper-pagination'
					},
					notNextTick: false
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
