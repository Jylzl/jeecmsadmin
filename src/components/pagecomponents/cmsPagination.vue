<template>
	<el-pagination background layout="total, sizes, prev, pager, next, jumper" :page-sizes="pageSizes"
		:page-size="pageSize" :total="total" :current-page="pageNo" :pager-count="5" @size-change="handleSizeChange"
		@current-change="handleCurrentChange">
	</el-pagination>
</template>

<script>
export default {
	name: "cms-pagination",
	props: {
		total: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			pageSize: 20,
			pageSizes: [10, 20, 50, 100, 200],
			pageNo: 1
		};
	},
	methods: {
		handleSizeChange(val) {
			this.pageSize = val;
			this.$emit("change", this.pageNo, this.pageSize);
		},
		handleCurrentChange(val) {
			this.pageNo = val;
			this.$emit("change", this.pageNo, this.pageSize);
		}
	},
	created() {}
};
</script>