<template>
	<el-container class="h100">
		<el-header>
			<Header />
		</el-header>
		<el-container class="p-body">
			<el-aside :width="width">
				<Aside />
			</el-aside>
			<el-container class="h100">
				<el-main id="js_mainBox">
					<Main />
				</el-main>
				<el-footer height="40px">
					<Footer />
				</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>
<script>
// @ is an alias to /src
import Header from "@/layout/header/Header.vue";
import Main from "@/layout/main/Main.vue";
import Aside from "@/layout/aside/Aside.vue";
import Footer from "@/layout/footer/Footer.vue";
export default {
	name: "Layout",
	components: {
		Header,
		Aside,
		Main,
		Footer
	},
	data() {
		return {};
	},
	computed: {
		width() {
			return this.$store.getters.getAsideWidth;
		}
	},
	methods: {}
};
</script>
<style>
.el-header {
	height: 60px;
	background: #165abb url("../assets/img/header_bg.png") no-repeat right
		center;
	border-bottom: 1px solid #e0e4e9;
	box-shadow: 10px 1px 15px rgba(0, 0, 0, 0.17);
	color: #ffffff;
}

.p-body {
	height: calc(100% - 60px);
}

.el-header {
	line-height: 60px;
}
.el-footer {
	line-height: 40px;
}

#js_mainBox {
	height: 100%;
	padding: 0;
}

main.el-main {
	background-color: #f8f8f8;
	padding-top: 0;
	height: 100%;
}

.el-footer {
	overflow: hidden;
	line-height: 40px;
	border-top: 1px solid #e0e4e9;
	box-shadow: 10px -1px 15px rgba(0, 0, 0, 0.17);
}
</style>