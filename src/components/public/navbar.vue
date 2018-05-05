<template>
	<div :class="$style.navbar">
		<ul :class="$style.list">
			<li>
				<router-link to="/home">
					<p :class="$style.img"></p>
					<p :class="$style.word">首页</p>
				</router-link>					
			</li>
			<li>
				<router-link to="/home">
					<p :class="$style.img"></p>
					<p :class="$style.word">分类</p>
				</router-link>					
			</li>
			<li>
				<router-link to="/home">
					<p :class="$style.img"></p>
					<p :class="$style.word">课程表</p>
				</router-link>					
			</li>
			<li>
				<router-link to="/home">
					<p :class="$style.img"></p>
					<p :class="$style.word">我的</p>
				</router-link>					
			</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	.router-link-exact-active {
		color: #33b8ff !important;
		p:first-child {
			background-position-y: -48px !important;
		}
	}
</style>

<style lang="scss" module>
	.navbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100px;
		background: #fff;
		.list {
			display: flex;
			height: 100%;
			li {
				display: flex;
				width: 25%;
				height: 100%;
				align-items: center;
				text-align: center;
				a {
					width: 100%;
					height: 100%;	
					padding-top: 12px;
					box-sizing: border-box;			
					text-decoration: none;
					color: #777;
				}
				.img {		
					width: 48px;		
					height: 48px;
					margin: auto;
					background: url(../../images/sprite.png) no-repeat;
					background-size: 192px 96px;
				}
				&:nth-child(2)  {
					.img {
						background-position-x: -48px; 
					}
					
				}
				&:nth-child(3) {
					.img {
						background-position-x: -96px; 
					} 
				}
				&:nth-child(4) {
					.img {
						background-position-x: -144px; 
					}
				}
				.word {
					font-size: 24px;
					line-height: 32px;
				}
			}
		}
	}
</style>