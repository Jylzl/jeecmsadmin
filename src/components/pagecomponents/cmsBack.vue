<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-04-19 13:09:37
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-05 16:25:36
 -->
<template>
	<a class="cms-back" href="javascript:void(0)" @click="$router.go(-1)"></a>
</template>

<script>
export default {
	name: "cms-back",
	props: {
		value: "",
		label: {
			type: String,
			default: "label"
		},
		width: {
			type: Number,
			default: 160
		}
	},
	data() {
		return {
			currentValue: this.value
		};
	},
	methods: {}
};
</script>

<style scoped lang="scss">
</style>
