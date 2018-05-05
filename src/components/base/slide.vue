<template>
	<section :class="cname">
		<swiper 
			:options="options" 
			:not-next-tick="options.notnextTick"
		>
			<swiper-slide 
				v-for="item in items" 
				:key="item.src"
			>
				<router-link :to="{name: item.href}">
					<img :src="item.src" :class="$style.img">
				</router-link>	
			</swiper-slide>
			<div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
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
		items: {
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
	.img {
		width: 100%;
		height: 244px;
	}
</style>