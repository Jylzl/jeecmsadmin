/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 15:53:28
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-05 16:35:01
 */
'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
	return path.join(__dirname, dir)
}

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const name = defaultSettings.title || 'vue Element Admin' // page title

module.exports = {
	publicPath: "/", // 根路径
	outputDir: "dist", //构建输出目录
	assetsDir: "assets", //静态资源目录
	lintOnSave: false, // 是否开启eslint保存检测，有效值true/false/error
	devServer: {
		open: true,
		host: process.env.VUE_APP_APP_HOST,
		port: process.env.VUE_APP_APP_PORT,
		https: false,
		hotOnly: false,
		proxy: {
			//配置跨域
			"/api": {
				target: process.env.VUE_APP_SERVER_API,
				changOrigin: true,
				ws: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	},
	configureWebpack: {
		// provide the app's title in webpack's name field, so that
		// it can be accessed in index.html to inject the correct title.
		name: name,
		resolve: {
			alias: {
				'@': resolve('src')
			}
		},
		node: {
			process: true,
		},
		plugins: [
			new MonacoWebpackPlugin()
		]
	}
};