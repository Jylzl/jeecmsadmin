<!--
 * @description: 登录页
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-24 08:40:20
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-10 11:12:44
 -->
<template>
	<div class="land-box">
		<div class="land-box-center">
			<div class="left">
				<img :src="imgUrl" alt draggable="false" />
			</div>
			<div class="right">
				<div class="logo">Jeecms-logo</div>
				<div class="land-form">
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="账号登录" name="password">
							<div class="card-box">
								<el-form :model="landForm_password" ref="landForm_password" :rules="rules"
									class="demo-ruleForm">
									<el-form-item prop="user">
										<el-autocomplete v-model="landForm_password.user"
											:fetch-suggestions="querySearch" placeholder="请输入手机号/邮箱/用户名"
											:trigger-on-focus="false" @select="handleSelect" style="width:100%;"
											:maxlength="20" @keyup.enter.native="submitForm('landForm_password')">
											<template slot-scope="{ item }">
												<span class="fl">{{ item.value }}</span>
												<el-button type="text" icon="el-icon-close" class="fr" title="删除账号信息"
													@click="delLocalAccount(item.value)"></el-button>
											</template>
										</el-autocomplete>
									</el-form-item>
									<el-form-item prop="pswd">
										<div class="show-pswd">
											<el-input :type="pswdType" v-model.number="landForm_password.pswd"
												autocomplete="off" placeholder="密码" maxlength="16"
												class="show-pswd-input"
												@keyup.enter.native="submitForm('landForm_password')"></el-input>
											<el-button type="text" class="show-pswd-btn" title="显示密码" :icon="icon"
												@mousedown.native="showPswd(true)" @mouseup.native="showPswd(false)">
											</el-button>
										</div>
									</el-form-item>
									<div class="forget-password">
										<el-checkbox v-model="landForm_password.rememberPswd" @change="checkCookies">
											记住密码</el-checkbox>
										<router-link to="/register">忘记密码？</router-link>
									</div>
								</el-form>
							</div>
						</el-tab-pane>
						<el-tab-pane label="免密登录" name="phone">
							<div class="card-box-two">
								<el-form :model="landForm_phone" ref="landForm_phone" :rules="rules"
									class="demo-ruleForm">
									<el-row :gutter="20">
										<el-col :span="8">
											<el-form-item>
												<el-select v-model="landForm_phone.areaCode" placeholder="请选择">
													<el-option style="min-width:180px;" v-for="item in areaCodes"
														:key="item.code" :label="item.code" :value="item.code">
														<span class="fl">{{item.code}}</span>
														<span
															style="float: right; color: #8492a6; font-size: 13px">{{item.name}}</span>
													</el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="16">
											<el-form-item prop="phone">
												<el-input type="tel" v-model.number="landForm_phone.phone"
													autocomplete="off" placeholder="手机号" maxlength="20" clearable>
												</el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-form-item prop="verificationCode">
										<div class="get-code">
											<el-input type="text" v-model.number="landForm_phone.verificationCode"
												autocomplete="off" placeholder="6位数字验证码" maxlength="8"
												class="get-code-input"
												@keyup.enter.native="submitForm('landForm_phone')"></el-input>
											<el-button type="text" class="get-code-btn">获取验证码</el-button>
										</div>
									</el-form-item>
								</el-form>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
				<div class="land-form-btn">
					<div id="your-dom-id" class="nc-container" v-show="aliyun.show"></div>
					<el-button type="primary" @click="submitForm(submitFormName)" style="width:100%;"
						:disabled="landLoading.disabled" :icon="landLoading.icon" v-show="!aliyun.show">
						{{landLoading.content}}</el-button>
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
	</div>
</template>
<script>
	import Cookies from "js-cookie";
	import CryptoJS from "crypto-js";
	import tripledes from "crypto-js/tripledes";
	import va from "@/rules/index.js";
	export default {
		data() {
			//引入自定义验证规则
			var phone = va.mobile;
			var verificationCode = va.verificationCode;
			let r_user = va.required("用户名不能为空", "change");
			let r_pswd = va.required("密码不能为空");
			let r_phone = va.mobile();
			let r_verificationCode = va.verificationCode();
			return {
				imgUrl: require("@/assets/img/land_bg_center.png"),
				aliyun: {
					open: true, //打开阿里验证
					show: false, //状态显示
					maxTimes: 5, //最大错误次数
					times: 0 //当前错误次数
				},
				icon: "icon iconfont icon-icon_yulan",
				submitFormName: "landForm_password",
				pswdType: "password",
				//选项卡，默认密码登陆
				activeName: "password",
				// 表单验证规则
				rules: {
					// 用户名验证
					user: [r_user],
					// 密码验证
					pswd: [r_pswd],
					// 自定义手机号规则
					phone: [r_phone],
					// 自定义验证码
					verificationCode: [r_verificationCode]
				},
				//密码登陆
				landForm_password: {
					user: "admin",
					pswd: "password",
					rememberPswd: true
				},
				// 手机登陆
				landForm_phone: {
					areaCode: "0086",
					phone: "",
					verificationCode: ""
				},
				landLoading: {
					disabled: false,
					icon: "",
					content: "登录"
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
				// 记住密码
				rememberUsers: []
			};
		},
		created() {
			this.aliyun.times = Cookies.get("landingTimes") ?
				Cookies.get("landingTimes") :
				0;
		},
		mounted() {
			//cookies里面登陆次数超过次数显示人机验证
			if (this.aliyun.times >= this.aliyun.maxTimes - 1 && this.aliyun.open) {
				this.aliyun.show = true;
				// 阿里云人机验证
				this.aliyunFun();
			} else {
				this.aliyun.show = false;
			}
			// 从cookies里面取加密用户然后解密
			if (Cookies.get("account")) {
				this.rememberUsers = JSON.parse(
					tripledes
					.decrypt(
						Cookies.get("account"),
						process.env.VUE_APP_userSaveKey
					)
					.toString(CryptoJS.enc.Utf8)
				);
			}
			//判断用户浏览器是否开启Cookies，未开启则将记住密码状态置空为false
			if (!navigator.cookieEnabled) {
				this.landForm_password.rememberPswd = false;
			}
		},
		methods: {
			checkCookies() {
				if (!navigator.cookieEnabled) {
					this.$notify({
						title: "警告",
						message: "浏览器已禁止网站保存和读取Cookies数据，请打开后再试",
						type: "warning"
					});
					this.landForm_password.rememberPswd = false;
					return false;
				}
			},
			// 密码长按显示
			showPswd(type) {
				if (type) {
					this.pswdType = "text";
					this.icon = "icon iconfont icon-miwen";
				} else {
					this.pswdType = "password";
					this.icon = "icon iconfont icon-icon_yulan";
				}
			},
			// 删除本地记录用户
			delLocalAccount(userName) {
				this.$confirm("此操作将从本地删除该用户信息, 是否继续?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning"
					})
					.then(() => {
						this.rememberUsers = this.rememberUsers.filter(
							user => user.value != userName
						);
						//加密用户信息，并存入cookies
						Cookies.set(
							"account",
							tripledes
							.encrypt(
								JSON.stringify(this.rememberUsers),
								process.env.VUE_APP_userSaveKey
							)
							.toString(), {
								expires: 7
							}
						);
						this.successMessage("删除成功!");
						// 重置表单
						this.$refs["landForm_password"].resetFields();
					})
					.catch(() => {
						this.message("已取消删除");
					});
			},
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						this.landLoading.content = "正在登录...";
						this.landLoading.icon = "el-icon-loading";
						this.landLoading.disabled = true;
						this.$store
							.dispatch("userLogin", {
								_this: this,
								loginForm: this.landForm_password
							})
							.then(res => {
								switch (res.code) {
									case "200":
										// 登录成功
										this.landSuccess();
										break;
									case "304":
										// 登录失败
										this.landFail(
											"warning",
											"用户或密码名错误!"
										);
										break;
									case "301":
										// 登录失败
										this.landFail("warning", res.message + "!");
										break;
									default:
										// 登录失败
										this.landFail();
										break;
								}
							})
							.catch(() => {
								// 登录失败
								this.landFail();
							});
					} else {
						return false;
					}
				});
			},
			querySearch(queryString, cb) {
				const rememberUsers = this.rememberUsers;
				let results =
					queryString == " " ?
					rememberUsers :
					rememberUsers.filter(this.createFilter(queryString));
				// 调用 callback 返回建议列表的数据
				if (results.length > 0 && queryString === results[0].value) {
					this.landForm_password.pswd = results[0].pswd;
					this.landForm_password.rememberPswd = results[0].rememberPswd;
				} else {
					this.landForm_password.pswd = "";
				}
				cb(results);
			},
			createFilter(queryString) {
				return rememberUser => {
					return (
						rememberUser.value
						.toLowerCase()
						.indexOf(queryString.toLowerCase()) === 0
					);
				};
			},
			// tab切换更换按钮提交表单
			handleClick(tab, event) {
				if (tab.name == "password") {
					this.submitFormName = "landForm_password";
				} else if (tab.name == "phone") {
					this.submitFormName = "landForm_phone";
				}
				//重置登录
				this.restLand();
			},
			handleSelect(item) {
				this.landForm_password.pswd = item.pswd;
			},
			landFormPassword() {},
			landFormPhone() {},
			//阿里人机验证
			aliyunFun() {
				var _this = this;
				var nc_token = [
					"CF_APP_1",
					new Date().getTime(),
					Math.random()
				].join(":");
				var NC_Opt = {
					renderTo: "#your-dom-id",
					appkey: "CF_APP_1",
					scene: "register",
					token: nc_token,
					customWidth: 321,
					trans: {
						key1: "code0"
					},
					elementID: ["usernameID"],
					is_Opt: 0,
					language: "cn",
					isEnabled: true,
					timeout: 3000,
					times: _this.aliyun.maxTimes,
					apimap: {
						// 'analyze': '//a.com/nocaptcha/analyze.jsonp',
						// 'get_captcha': '//b.com/get_captcha/ver3',
						// 'get_captcha': '//pin3.aliyun.com/get_captcha/ver3'
						// 'get_img': '//c.com/get_img',
						// 'checkcode': '//d.com/captcha/checkcode.jsonp',
						// 'umid_Url': '//e.com/security/umscript/3.2.1/um.js',
						// 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
						// 'umid_serUrl': 'https://g.com/service/um.json'
					},
					callback: function (data) {
						// window.console && console.log(nc_token)
						// window.console && console.log(data.csessionid)
						// window.console && console.log(data.sig)
						setTimeout(() => {
							//登录成功手动清除记录的登录次数
							Cookies.remove("landingTimes");
							_this.aliyun.times = 0;
							_this.aliyun.show = false;
						}, 1200);
					}
				};
				var nc = new noCaptcha(NC_Opt);
				nc.upLang("cn", {
					_startTEXT: "请按住滑块，拖动到最右边",
					_yesTEXT: "验证通过",
					_error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
					_errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
				});
			},
			landSuccess() {
				this.$store
					.dispatch("setRouters")
					.then(res => {
						if (res.code == "200") {
							this.$router.addRoutes(
								this.$store.state.perms.addRouters
							);
							//登录成功后，先清除旧用户信息，然后判断用户是否勾选记住密码，是则将用户信息插入数组，否则仅记住用户名，然后将数组加密后存入cookies
							this.rememberUsers = this.rememberUsers.filter(
								user => user.value != this.landForm_password.user
							);
							// 默认记录5条用户信息，
							if (this.rememberUsers.length > 4) {
								this.rememberUsers = this.rememberUsers.splice(
									this.rememberUsers.length - 4,
									4
								);
							}
							if (this.landForm_password.rememberPswd) {
								this.rememberUsers.push({
									value: this.landForm_password.user,
									pswd: this.landForm_password.pswd
								});
							} else {
								this.rememberUsers.push({
									value: this.landForm_password.user,
									pswd: ""
								});
							}
							//加密用户信息，并存入cookies
							Cookies.set(
								"account",
								tripledes
								.encrypt(
									JSON.stringify(this.rememberUsers),
									process.env.VUE_APP_userSaveKey
								)
								.toString(), {
									expires: 7
								}
							);
							//登录成功手动清除cookies记录的登录次数
							Cookies.remove("landingTimes");
							let siteName = "";
							//遍历网站名称
							for (let i in this.$store.state.perms.siteItems) {
								if (
									this.$store.state.perms.siteItems[i].id ==
									localStorage.getItem("_site_id_param")
								) {
									siteName = this.$store.state.perms.siteItems[i]
										.name;
									break;
								}
							}
							this.$notify({
								title: "登录成功",
								message: "欢迎进入 " + siteName + " 后台管理系统",
								type: "success",
								showClose: true
							});
							// 重置登录样式
							this.restLand();
							// 登录成功跳转主页
							this.$router.push({
								name: "home"
							});
						} else {
							this.landFail();
						}
					})
					.catch(err => {
						this.landFail();
						console.log(err)
					});
			},
			//登陆失败
			landFail(type, msg) {
				this.loading = false;
				// 登陆错误时记录次数
				Cookies.set(
					"landingTimes",
					Cookies.get("landingTimes") ?
					Number(Cookies.get("landingTimes")) + 1 :
					1, {
						expires: 1
					}
				);
				this.aliyun.times++;
				// 登录失败五次启用阿里云人机验证,且人机验证打开
				if (
					this.aliyun.times >= this.aliyun.maxTimes - 1 &&
					this.aliyun.open
				) {
					setTimeout(() => {
						this.aliyun.show = true;
						this.aliyunFun();
					}, 1200);
				} else {
					this.aliyun.show = false;
				}
				//重置登录样式
				this.restLand();
				if (type) {
					this.message(msg, type);
				} else {
					this.warningMessage("登录失败");
				}
			},
			// 样式重置
			restLand() {
				this.landLoading.content = "登录";
				this.landLoading.icon = "";
				this.landLoading.disabled = false;
			}
		}
	};
</script>

<style scoped>
	.land-box {
		display: flex;
		width: 100%;
		height: 100%;
		background: url(../../assets/img/land_bg.png);
		align-items: center;
		justify-content: center;
		background-size: cover;
	}

	.land-box-center {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-sizing: border-box;
		width: 1160px;
		height: 542px;
	}

	.land-box-center>.left,
	.land-box-center>.left img {
		display: block;
		width: 679px;
		height: 542px;
	}

	.land-box-center>.right {
		width: 481px;
		height: 542px;
		background-color: #fff;
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

	.forget-password {
		box-sizing: border-box;
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
		height: 20px;
		line-height: 20px;
		margin-bottom: 18px;
		font-size: 14px;
	}

	.card-box {
		box-sizing: border-box;
		height: 182px;
		padding-top: 20px;
	}

	.card-box-two {
		box-sizing: border-box;
		height: 160px;
		padding-top: 20px;
	}

	.card-box-two {
		padding-top: 30px;
	}

	.land-form-btn {
		box-sizing: border-box;
		padding: 0 80px;
	}

	.three-land {
		box-sizing: border-box;
		padding: 0 80px;
		text-align: right;
		margin-top: 10px;
	}

	.show-pswd,
	.get-code {
		position: relative;
		height: 40px;
		width: 100%;
	}

	.show-pswd-input,
	.get-code-input {
		position: absolute;
		box-sizing: border-box;
		width: 100%;
	}

	.show-pswd-input input,
	.get-code-input input {
		padding-right: 100px;
	}

	.show-pswd-btn,
	.get-code-btn {
		position: absolute;
		right: 12px;
		z-index: 10;
	}

	.show-pswd-btn {
		font-size: 20px;
		padding-top: 9px;
		padding-bottom: 9px;
	}
</style>