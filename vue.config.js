const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
	publicPath: "/", // 根路径
	outputDir: "dist", //构建输出目录
	assetsDir: "assets", //静态资源目录
	lintOnSave: false, // 是否开启eslint保存检测，有效值true/false/error
	// chainWebpack: config => {
	// 	config.plugin('provide').use(MonacoWebpackPlugin)
	// },
	configureWebpack: {
		node: {
			process: true,
		},
		plugins: [
			new MonacoWebpackPlugin()
		]
	},
	devServer: {
		open: true,
		host: "127.0.0.1",
		port: 8081,
		https: false,
		hotOnly: false,
		proxy: {
			//配置跨域
			"/api": {
				target: "process.env.VUE_APP_API_URL",
				ws: true,
				changOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	}
};