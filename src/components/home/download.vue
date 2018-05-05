<template>
	<div :class="$style.download">
		<div :class="$style.text">
			<p :class="$style.big">用APP学习</p>
			<p :class="$style.small">支持离线下载、直播互动、画面更清晰、更流畅</p>
		</div>
		<div :class="$style.control">
			<button>下载</button>
			<button>打开</button>
		</div>
		
	</div>
</template>
<script>
	export default {

    }
</script>

<style lang="scss" module> 
	.download {
		display: flex;
		height: 100px;
		padding-left: 30px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		align-items: center;
		justify-content: space-between;
		.text {
			width: 290px;
			.big {
				height: 32px;
				font-size: 32px;
				line-height: 32px;
			}
			.small {
				height: 24px;
				margin-top: 8px;
				line-height: 24px;
				text-overflow: ellipsis;
				overflow: hidden;
				color: #777;
				white-space: nowrap;
				font-size: 24px;
			}
		}
		.control {
			display: flex;
			button {
				height: 60px;
				width: 140px;
				margin-right: 20px;
				border: 1px solid #23b8ff;
				border-radius: 6px;
				background-color: #fff;
				color: #23b8ff;
				font-size: 30px;
				&:nth-of-type(1) {
					background-color: #23b8ff;
					color: #fff;
				}
			}
		}

	}
</style>