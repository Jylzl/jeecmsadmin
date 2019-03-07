<template>
	<div class="land-box">
		<div class="land-box-center">
			<div class="logo">Jeecms-logo</div>
            <div class="user-header-img">
                <pan-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"></pan-thumb>
				<!-- <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030012986,1102835514&fm=200&gp=0.jpg" alt=""> -->
			</div>
			<div class="land-form">
				<el-form :model="landForm_password" ref="landForm_password" class="demo-ruleForm">
					<el-form-item prop="user" :rules="user">
						<el-input type="text" v-model.number="landForm_password.user" autocomplete="off" placeholder="手机号/邮箱/用户名" :readonly=true></el-input>
					</el-form-item>
					<el-form-item prop="pswd" :rules="pswd">
						<div class="show-pswd">
							<el-input :type="pswdType" v-model.number="landForm_password.pswd" autocomplete="off" placeholder="密码" maxlength="16" class="show-pswd-input" @keyup.enter.native="submitForm('landForm_password')"></el-input>
							<el-button type="text" class="show-pswd-btn" title="显示密码"><i class="el-icon-view" @mousedown="showPswd('text')" @mouseup="showPswd('password')"></i></el-button>
						</div>
					</el-form-item>
					<el-form-item style="margin-bottom:0;">
						<el-button type="primary" @click="submitForm('landForm_password')" style="width:100%;" :disabled="landLoading.disabled" :icon="landLoading.icon">{{landLoading.content}}</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script>
import PanThumb from '@/components/PanThumb'
	export default {
        components: {
            PanThumb
        },
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
                pswdType:'password',
				landForm_password: {
					user: 'admin',
					pswd:'',
					rememberPswd:true
				},
				landLoading:{
					disabled:false,
					icon:'',
					content:'登陆'
				}
			};
        },
        created:function(){
            this.landForm_password.user = this.$route.query.user;
        },
        mounted:function(){        
		},
		methods: {
			showPswd(type){
				this.pswdType = type;
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.landLoading.content = '正在登陆...';
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
	.card-box{
		box-sizing: border-box;
		height: 230px;
		padding-top: 20px;
	}
	.show-pswd{
		position: relative;
		height: 40px;
		width: 100%;
	}
	.show-pswd-input{
		position: absolute;
		box-sizing: border-box;
		width: 100%;
	}
	.show-pswd-input input{
		padding-right: 100px;
	}
	.show-pswd-btn{
		position: absolute;
		right: 12px;
		font-size: 20px;
		padding-top: 9px;
		padding-bottom: 9px;
	}
    .user-header-img{
        display: -webkit-flex;
		display: flex;
		width: 100%;
		height: 120px;
		align-items: center;
		/*垂直居中*/
		justify-content: center;
		/*水平居中*/
    }
    .user-header-img img{
        box-sizing: border-box;
		display: block;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 1px solid #e1e2e3;
		padding: 1px;
    }
</style>