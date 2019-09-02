<template>
	<!-- <a href="javascript:void(0)" class="cms-table-button iconfont" :class="type" :title="title">
	</a> -->
	<el-button :type="inf.type" :icon="inf.icon" :title="inf.title" size="mini" circle></el-button>
</template>

<script>
export default {
	name: "cms-button",
	props: {
		type: {
			type: String,
			default: "edit"
		}
	},
	data() {
		return {};
	},
	computed: {
		title() {
			let titie = "";
			if (this.type == "edit") {
				titie = "修改";
			}
			if (this.type == "delete") {
				titie = "删除";
			}
			if (this.type == "rename") {
				titie = "重命名";
			}
			if (this.type == "view") {
				titie = "查看";
			}
			if (this.type == "user") {
				titie = "成员管理";
			}
			if (this.type == "down") {
				titie = "下载";
			}
			if (this.type == "formList") {
				titie = "代码调用";
			}
			return titie;
		},
		inf() {
			return this.backData();
		}
	},
	methods: {
		backData() {
			let titie = "";
			let type = "";
			let icon = "";

			if (this.type == "edit") {
				titie = "修改";
				type = "primary";
				icon = "el-icon-edit";
			} else if (this.type == "delete") {
				titie = "删除";
				type = "danger";
				icon = "el-icon-delete";
			} else if (this.type == "rename") {
				titie = "重命名";
				type = "warning";
				icon = "el-icon-magic-stick";
			} else if (this.type == "view") {
				titie = "查看";
				type = "success";
				icon = "el-icon-magic-view";
			} else if (this.type == "user") {
				titie = "成员管理";
				type = "info";
				icon = "el-icon-magic-user";
			} else if (this.type == "down") {
				titie = "下载";
				type = "info";
				icon = "el-icon-download";
			} else if (this.type == "formList") {
				titie = "代码调用";
				type = "info";
				icon = "el-icon-paperclip";
			}
			return {
				titie: titie,
				type: type,
				icon: icon
			};
		}
	}
};
</script>