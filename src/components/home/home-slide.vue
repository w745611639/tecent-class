<template>
	<Slide :items="item"></Slide>
</template>
<script>
	import Slide from '../base/slide.vue'
	export default {
		components: {
			Slide
		},
		props: {
			items: Array
		},
		data () {
			return {
				item: [{
					src: '//p.qpic.cn/qqconadmin/0/6b8017da7b2447e591bbfffc95be4939/0',
					href: 'home'
				}, {
					src: '//p.qpic.cn/qqconadmin/0/3750e1557d7e4c64914688991d0dcd1a/0',
					href: 'home'
				}, {
					src: '//p.qpic.cn/qqconadmin/0/5b8bc6ac107547658be1068c4162b84e/0',
					href: 'home'
				}, {
					src: '//p.qpic.cn/qqconadmin/0/2118e386ef3849fa8780f55b92a61a9c/0',
					href: 'home'
				}, {
					src: '//p.qpic.cn/qqconadmin/0/b73cbd36aee04117af47d16ea6be2d11/0',
					href: 'home'
				}, {
					src: '//p.qpic.cn/qqconadmin/0/71a8f924efed468588d7468cfc22cbb8/0',
					href: 'home'
				}, {
					src: '//p.qpic.cn/qqconadmin/0/54eb28d2faed49feb7b6d6d86f14538f/0',
					href: 'home'
				}, {
					src: '//p.qpic.cn/qqconadmin/0/a618ff554dad4ed982e0b78bb25d994b/0',
					href: 'home'
				}]
			} 
		}
    }
</script>

<style>
	
</style>