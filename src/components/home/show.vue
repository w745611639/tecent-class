<template>
	<div :class="$style.show">
		<Panel v-for="item in data.courses" :class="$style.panel" :txt="item.header" :key="item.tag">
			<word-slide v-if="item.sl"></word-slide>
			<ul :class="$style.list">
				<li v-for="course in item.course" :key="course.title">
					<img :src="course.image" alt="">
					<div :class="$style.text">
						<p :class="$style.title">{{course.title}}</p>
						<p :class="$style.teacher">{{course.teacher}}</p>
						<p :class="$style.price">{{course.price}}</p>
					</div>
				</li>
			</ul>
		</Panel>
		<div :class="$style.more">全部课程</div>
	</div>
</template>
<script>
	import Panel from '../base/panel.vue';
	import wordSlide from '../base/wordslide.vue';
	export default {
		components: {
			Panel,
			wordSlide
		},
		beforeCreate () {
			// console.log(this);
		},
		data () {
			return {
				data: [],
				options: {
		          slidesPerView: 2.3,
		          spaceBetween: 30,
		          freeMode: true,
		          pagination: {
		            // el: '.swiper-pagination',
		            clickable: true
        		  }
				}
			}
		},
		watch: {
			$route () {
				this.data = this.$store.state.data.filter(ele => this.$route.query.course === ele.id)[0];
			}
		}
    }
</script>

<style lang="scss" module>
	.panel {
		padding-left: 0;
		> h2 {
			&:empty {
				display: none;
			}
		}
		.list {
			display: flex;
			flex-wrap: wrap;
			li {
				display: flex;
				flex-direction: column;
				width: 50%;
				height: 312px;
				box-sizing: border-box;
				padding-right: 12px;			
				padding-bottom: 20px;
				margin-bottom: 20px;
				border-radius: 6px;
				font-size: 28px;
				// overflow: hidden;
				img {
					width: 100%;
					height: 168px;
					border-radius: 8px;
				}
				.title {
					height: 72px;
					padding: 0 8px;
					margin-top: 14px;
					line-height: 36px;
					color: #000;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    display: -webkit-box;
				    -webkit-line-clamp: 2;
				    -webkit-box-orient: vertical;
				    word-wrap: break-word
				}
				.price {
					height: 28px;
					padding-left: 8px;
					margin-top: 10px;
					line-height: 28px;
					color: #23b8ff

				}
			}
		}		
	}
	.more {
		height: 90px;
		line-height: 90px;
		margin: 0 20px 26px;
		text-align: center;
		color: #bbb;
	    border-radius: 4px;    
	    font-size: 28px;	    
  	  	background: #f6f6f6;
	}
	
</style>