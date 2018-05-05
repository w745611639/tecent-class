<template>
	<div :class="$style.panel">
		<h2 :class="txt ? '' : 'none'">/ {{txt}} /</h2>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			txt: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss">
	.none {
		display: none;
	}
</style>
<style lang="scss" module>
	@import '../../style/element.scss';
	.panel {
		@include panel;
	}
</style>