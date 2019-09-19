<template>
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
			let title = "";
			if (this.type == "edit") {
				title = "修改";
			}
			if (this.type == "delete") {
				title = "删除";
			}
			if (this.type == "rename") {
				title = "重命名";
			}
			if (this.type == "view") {
				title = "查看";
			}
			if (this.type == "user") {
				title = "成员管理";
			}
			if (this.type == "down") {
				title = "下载";
			}
			if (this.type == "formList") {
				title = "代码调用";
			}
			return title;
		},
		inf() {
			return this.backData();
		}
	},
	methods: {
		backData() {
			let title = "";
			let type = "";
			let icon = "";

			if (this.type == "edit") {
				title = "修改";
				type = "primary";
				icon = "el-icon-edit";
			} else if (this.type == "delete") {
				title = "删除";
				type = "danger";
				icon = "el-icon-delete";
			} else if (this.type == "rename") {
				title = "重命名";
				type = "warning";
				icon = "el-icon-magic-stick";
			} else if (this.type == "view") {
				title = "查看";
				type = "success";
				icon = "el-icon-magic-view";
			} else if (this.type == "user") {
				title = "成员管理";
				type = "info";
				icon = "el-icon-magic-user";
			} else if (this.type == "down") {
				title = "下载";
				type = "info";
				icon = "el-icon-download";
			} else if (this.type == "formList") {
				title = "代码调用";
				type = "info";
				icon = "el-icon-paperclip";
			} else if (this.type == "more") {
				title = "更多操作";
				type = "warning";
				icon = "el-icon-more";
			}
			return {
				title: title,
				type: type,
				icon: icon
			};
		}
	}
};
</script>