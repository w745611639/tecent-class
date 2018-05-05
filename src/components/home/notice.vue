<template>
	<Panel txt="" :class="$style.panel">
		<div :class="$style.cont">
			<img src="//p.qpic.cn/qqconadmin/0/909d3c55f51c4916bbdace8b7245c309/0">
			<img src="//p.qpic.cn/qqconadmin/0/b969726e4eb140c88a091ec0547cdb33/0">
		</div>
	</Panel>
</template>
<script>
	import Panel from '../base/panel.vue';
	export default {
		components: {
			Panel
		}

    }
</script>

<style lang="scss" module>
	.panel {
		> h2 {
			display: none;
		}
	}
	.cont {
		display: flex;
		height: 138px;
		align-items: center;
		img {
			&:first-child {
				width: 104px;
				height: 104px;
			}
			&:last-child {
				width: 488px;
				height: 104px;
			}
		}
	}
</style>