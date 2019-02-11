<template>
	<el-row type="flex" justify="space-between">
		<el-col :span="11"></el-col>
		<el-col :span="5">
			<el-form :model="numberValidateForm" ref="numberValidateForm">
				<el-input placeholder="请输入内容" v-model="numberValidateForm.age" autocomplete="off" size="medium" clearable>
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-form>
		</el-col>
		<el-col :span="10">
			<el-dropdown class="fr" trigger="click">
				<span class="el-dropdown-link">
					超级管理员
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>用户设置</el-dropdown-item>
					<el-dropdown-item>待办事件</el-dropdown-item>
					<el-dropdown-item>锁屏</el-dropdown-item>
					<el-dropdown-item divided>退出登陆</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: 'Header',
		components: {},
		data() {
			return {
				numberValidateForm: {
					age: ''
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
<style lang="scss" scoped>
	.el-dropdown-link:hover {
		cursor: pointer;
	}

	.nav-bar,
	.navbar-nav,
	.navbar-collapse {
		height: 100%;
	}

	.navbar-nav>ul {
		height: 100%;
	}

	.navbar-nav>ul:after {
		content: "";
		display: block;
		clear: both;
		height: 0;
	}

	.navbar-nav>ul {
		zoom: 1;
	}

	.navbar-nav>ul>li {
		box-sizing: border-box;
		float: left;
		height: 100%;
		padding: 10px 15px;
		line-height: 39px;
	}
</style>