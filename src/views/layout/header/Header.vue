<template>
	<el-row type="flex" justify="space-between">
		<el-col :span="11">
			<el-badge is-dot class="item">数据查询</el-badge>
		</el-col>
		<el-col :span="5">
			<el-form :model="numberValidateForm" ref="numberValidateForm">
				<el-input placeholder="请输入内容" v-model="numberValidateForm.age" autocomplete="off" size="medium" clearable>
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-form>
		</el-col>
		<el-col :span="10">
			<div class="user-console">
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						<el-badge is-dot class="item">超级管理员</el-badge>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>用户设置</el-dropdown-item>
						<el-dropdown-item>
							<el-badge :value="193" class="item">未读消息</el-badge>
						</el-dropdown-item>
						<el-dropdown-item>锁屏</el-dropdown-item>
						<el-dropdown-item divided>退出登陆</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<div class="user-header-img">
					<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030012986,1102835514&fm=200&gp=0.jpg" alt="">
				</div>
			</div>
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
	.item{
		box-sizing: border-box;
		padding-right: 12px;
		line-height: 1;
	}
	.user-console{
		display: -webkit-flex;
		display: flex;
		flex-direction: row-reverse;
	}
	.user-header-img{
		display: -webkit-flex;
		display: flex;
		align-items:center;
		margin-right: 8px;
	}
	.user-header-img img{
		box-sizing: border-box;
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid #e1e2e3;
		padding: 1px;
	}
</style>