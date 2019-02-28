<template>
	<div class="land-box">
		<div class="land-box-center">
			<div class="logo">Jeecms-logo</div>
			<div class="land-form">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="账号登陆" name="first">
						<div class="card-box">
							<el-form :model="landForm_password" ref="landForm_password" class="demo-ruleForm">
								<el-form-item prop="user" :rules="user">
									<el-autocomplete v-model="landForm_password.user" :fetch-suggestions="querySearch" placeholder="请输入手机号/邮箱/用户名" :trigger-on-focus="false" @select="handleSelect" style="width:100%;"  :maxlength="20"></el-autocomplete>
									<!-- <el-input type="text" v-model.number="landForm_password.user" autocomplete="off" placeholder="手机号/邮箱/用户名" :autofocus=true></el-input> -->
								</el-form-item>
								<el-form-item prop="pswd" :rules="pswd">
									<div class="show-pswd">
										<el-input :type="pswdType" v-model.number="landForm_password.pswd" autocomplete="off" placeholder="密码" maxlength="16" class="show-pswd-input" @keyup.enter.native="submitForm('landForm_password')"></el-input>
										<el-button type="text" class="show-pswd-btn" title="显示密码"><i class="el-icon-view" @mousedown="showPswd('text')" @mouseup="showPswd('password')"></i></el-button>
									</div>
								</el-form-item>
								<div class="forget-password">
									<el-checkbox v-model="landForm_password.rememberPswd">记住密码</el-checkbox>
									<router-link to="/register">忘记密码？</router-link>
								</div>
								<el-form-item style="margin-bottom:0;">
									<el-button type="primary" @click="submitForm('landForm_password')" style="width:100%;" :disabled="landLoading.disabled" :icon="landLoading.icon">{{landLoading.content}}</el-button>
								</el-form-item>
							</el-form>
						</div>
					</el-tab-pane>
					<el-tab-pane label="免密登陆" name="second">
						<div class="card-box-two">
							<el-form :model="landForm_phone" ref="landForm_phone" class="demo-ruleForm">
								<el-row :gutter="20">
									<el-col :span="8">
										<el-form-item prop="age">
											<el-select v-model="landForm_phone.areaCode" placeholder="请选择">
												<el-option style="min-width:180px;" v-for="item in areaCodes" :key="item.code" :label="item.code" :value="item.code">
													<span class="fl">{{item.code}}</span>
													<span style="float: right; color: #8492a6; font-size: 13px">{{item.name}}</span>
												</el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="16">
										<el-form-item prop="phone" :rules="phone">
											<el-input type="tel" v-model.number="landForm_phone.phone" autocomplete="off" placeholder="手机号" maxlength="20" clearable></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-form-item prop="verificationCode" :rules="verificationCode">
									<div class="get-code">
										<el-input type="text" v-model.number="landForm_phone.verificationCode" autocomplete="off" placeholder="6位数字验证码" maxlength="8" class="get-code-input" @keyup.enter.native="submitForm('landForm_phone')"></el-input>
										<el-button type="text" class="get-code-btn">获取验证码</el-button>
									</div>
								</el-form-item>
								<el-form-item style="margin-bottom:0;">
									<el-button type="primary" @click="submitForm('landForm_phone')" style="width:100%;" :disabled="landLoading.disabled" :icon="landLoading.icon">{{landLoading.content}}</el-button>
								</el-form-item>
							</el-form>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
			<div class="three-land">
				<el-button type="text">
					<icon name="icon_qq" :w="32" :h="32"></icon>
				</el-button>
				<el-button type="text">
					<icon name="icon_weichat" :w="28" :h="28"></icon>
				</el-button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			// 自定义验证规则
			var phone = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('手机号不能为空'));
			}else if(!(/^1[34578]\d{9}$/.test(value)) || !(/^(5[1-6,9]|6[0-9]|9[0-8])\d{6}$/.test(value) || !(/^([0][9])\\d{8}$/.test(value)))){
				return callback(new Error('请输入正确的手机号码'));
			}else{
				callback();
			}
		};
		var verificationCode = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('验证码不能为空'));
			}else if(!(/\d{6}$/.test(value))){
				return callback(new Error('请输入6位数字验证码'));
			}else{
				callback();
			}
		};
			return {
				// 表单验证规则
				user: [//用户名验证
					{ required: true, message: '用户名不能为空'} 
				],
				pswd: [//密码验证
					{ required: true, message: '密码不能为空'} 
				],
				phone: [// 自定义手机号规则
					{ validator: phone, trigger: 'blur' } 
				],
				verificationCode:[// 自定义验证码
					{ validator: verificationCode, trigger: 'blur' } 
				],
				landForm_password: {
					user: '',
					pswd:'',
					rememberPswd:true
				},
				landForm_phone:{
					areaCode:'0086',
					phone:'',
					verificationCode:''
				},
				pswdType:'password',
				activeName: 'first',
				landLoading:{
					disabled:false,
					icon:'',
					content:'登陆'
				},
				areaCodes: [{
                        name: "中国大陆",
                        code: "0086"
                    },
                    {
                        name: "中国台湾",
                        code: "0886"
					},
					{
                        name: "中国香港",
                        code: "0852"
                    }
				],
				rememberUsers: [
					{ "value": "admin", "address": "长宁区新渔路144号" },
					{ "value": "lizilong", "address": "上海市长宁区淞虹路661号" }
				],
			};
		},
		methods: {
			showPswd(type){
				this.pswdType = type;
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.landLoading.content = '';
						this.landLoading.icon = 'el-icon-loading';
						this.landLoading.disabled = true;
						this.$message({
							message: '登陆成功',
							type: 'success',
							center: true
						});
						setTimeout(() => {
							this.landLoading.content = '登陆';
							this.landLoading.icon = '';
							this.landLoading.disabled = false;
							this.$router.push({  //核心语句
                                path:'/',   //跳转的路径
                            })
						}, 2000);
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			querySearch(queryString, cb) {
				var rememberUsers = this.rememberUsers;
				var results = queryString ? rememberUsers.filter(this.createFilter(queryString)) : rememberUsers;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (rememberUser) => {
				return (rememberUser.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			handleSelect(item) {
				console.log(item);
			},
			landFormPassword(){

			},
			landFormPhone(){

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
		width: 1160px;
		height: 542px;
		padding-left: 679px;
		background: #fff url(../../assets/img/land_bg_center.png) no-repeat center left;
		background-size: 679px 542px;
	}

	.logo {
		height: 150px;
		font-size: 36px;
		text-align: center;
		line-height: 150px;
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
		font-size: 14px;
	}
	.card-box,
	.card-box-two{
		box-sizing: border-box;
		height: 230px;
		padding-top: 20px;
	}
	.card-box-two{
		padding-top: 30px;
	}
	.three-land{
		box-sizing: border-box;
		padding: 0 80px;
		text-align: right;
	}
	.show-pswd,
	.get-code{
		position: relative;
		height: 40px;
		width: 100%;
	}
	.show-pswd-input,
	.get-code-input{
		position: absolute;
		box-sizing: border-box;
		width: 100%;
	}
	.show-pswd-input input,
	.get-code-input input{
		padding-right: 100px;
	}
	.show-pswd-btn,
	.get-code-btn{
		position: absolute;
		right: 12px;
		z-index: 10;
	}
	.show-pswd-btn{
		font-size: 20px;
		padding-top: 9px;
		padding-bottom: 9px;
	}
</style>