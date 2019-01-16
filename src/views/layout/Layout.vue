<template>
	<el-container>
		<el-aside width="221px">
			<Aside />
		</el-aside>
		<el-container>
			<el-header>
				<Header />
			</el-header>
			<el-main>
				<Main />
			</el-main>
			<el-footer height="40px">
				<Footer />
			</el-footer>
		</el-container>
	</el-container>
</template>
<script>
	// @ is an alias to /src
	import Header from '@/views/layout/header/Header.vue'
	import Main from '@/views/layout/main/Main.vue'
	import Aside from '@/views/layout/aside/Aside.vue'
	import Footer from '@/views/layout/footer/Footer.vue'
	export default {
		name: 'About',
		components: {
			Header,
			Aside,
			Main,
			Footer
		}
	}
</script>
<style>
	.el-header {
		height: 60px;
		background: #fff;
		border-bottom: 1px solid #e0e4e9;
		box-shadow: 10px 1px 15px rgba(0, 0, 0, 0.17);
	}
	.el-header,
	.el-footer {
		color: #333;
		line-height: 60px;
	}
	.el-aside {
		background-color: #d3dce6;
		color: #333;
		line-height: 200px;
	}
	main.el-main {
		/* background-color: #e9eef3; */
		background-color: #f8f8f8;
		color: #333;
		padding-top: 0;
	}
	body #app>.el-container {
		height: 100%;
	}
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
	#app .sidebar-container {
		-webkit-transition: width 0.28s;
		transition: width 0.28s;
		width: 200px !important;
		height: 100%;
		position: fixed;
		font-size: 0px;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
	}
	#app .scrollbar-wrapper {
		overflow-x: hidden !important;
	}
	.el-aside {
		text-align: left;
	}
	.el-footer {
		overflow: hidden;
		line-height: 40px;
		border-top: 1px solid #e0e4e9;
		box-shadow: 10px -1px 15px rgba(0, 0, 0, 0.17);
	}
	.el-scrollbar {
		height: 100%;
	}
</style>