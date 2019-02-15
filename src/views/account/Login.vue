<template>
	<div class="land-box">
		<div class="land-box-center">
			<div class="logo">jeecms-logo</div>
			<div class="land-form">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="账号登陆" name="first">
						<div class="card-box">
							<el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
							<el-form-item prop="age" :rules="rules">
								<el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off" placeholder="手机号/邮箱/用户名"></el-input>
							</el-form-item>
							<el-form-item prop="age" :rules="rules" style="margin-bottom:10px;">
								<el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off" placeholder="密码"></el-input>
							</el-form-item>
							<div class="forget-password">
								<el-checkbox v-model="checked">记住密码</el-checkbox>
								<router-link to="/register">忘记密码？</router-link>
							</div>
							<el-form-item>
								<el-button type="primary" @click="submitForm('numberValidateForm')" style="width:100%;">登陆</el-button>
							</el-form-item>
						</el-form>
						</div>
					</el-tab-pane>
					<el-tab-pane label="免密登陆" name="second">
						<div class="card-box">
							配置管理
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
			<div class="three-land">
				<icon name="icon_qq" :w="32" :h="32"></icon>
				<icon name="icon_weichat" :w="28" :h="28"></icon>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				checked: true,
				activeName: 'first',
				rules: [{
						required: true,
						message: '年龄不能为空'
					},
					{
						type: 'number',
						message: '年龄必须为数字值'
					}
				],
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
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>
<style scoped>
	.land-box {
		display: -webkit-flex;
		display: flex;
		width: 100%;
		height: 100%;
		background: url(../../assets/img/land_bg.png);
		align-items: center;
		/*垂直居中*/
		justify-content: center;
		/*水平居中*/
	}

	.land-box-center {
		box-sizing: border-box;
		width: 1200px;
		height: 542px;
		padding-left: 679px;
		background: #fff url(../../assets/img/land_bg_center.png) no-repeat center left;
		background-size: 679px 542px;
	}

	.logo {
		height: 150px;
		font-size: 36px;
	}

	.land-form {
		box-sizing: border-box;
		padding: 20px 80px 0 80px;
	}
	.forget-password{
		box-sizing: border-box;
		display: -webkit-flex;
		display: flex;
		justify-content:space-between;
		height: 20px;
		/* padding: 0 4px; */
		line-height: 20px;
		margin-bottom: 18px;
	}
	.card-box{
		box-sizing: border-box;
		height: 230px;
		padding-top: 10px;
	}
	.three-land{
		box-sizing: border-box;
		padding: 0 80px;
		text-align: right;
	}
</style>