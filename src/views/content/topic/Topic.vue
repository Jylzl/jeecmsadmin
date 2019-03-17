<template>
	<el-tabs type="border-card">
		<el-tab-pane label="树结构">
			<el-tree :data="data5" node-key="id" >
				<div class="custom-tree-node" slot-scope="{ node, data }" @check-change="handleCheckChange(node, data)">
					<div class="aligin-center" :data-id="data.icon">
						<svg class="icon svg-icon" aria-hidden="true">
							<use :xlink:href="data.icon"></use>
						</svg>
						<span>{{ node.label }}</span>
					</div>
					<div>
						<el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
						<el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
					</div>
				</div>
			</el-tree>
		</el-tab-pane>
		<el-tab-pane label="走马灯">
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3>{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</el-tab-pane>
		<el-tab-pane label="角色管理">角色管理</el-tab-pane>
		<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
	</el-tabs>
</template>

<script>
import {iconfont} from '@/assets/iconfont/iconfont_folder.js'
import {iconfontType} from '@/assets/iconfont/iconfont_file_type.js'
	let id = 1000;
	export default {
		data() {
			const data = [{
				id: 1,
				label: 'images',
				icon:'#icon-folder-images',
				children: [{
					id: 11,
					label: 'img_bg.png',
					icon:'#icon-file_type_image'
				}, {
					id: 12,
					label: 'img_header.png',
					icon:'#icon-file_type_image',
				}]
			}, {
				id: 2,
				label: 'img',
				icon:'#icon-folder-images',
				children: [{
					id: 21,
					label: 'img_bg.png',
					icon:'#icon-file_type_image'
				}, {
					id: 22,
					label: 'img_bg.png',
					icon:'#icon-file_type_image'
				}]
			}, {
				id: 3,
				label: 'css',
				icon:'#icon-folder-css',
				children: [{
					id: 31,
					label: 'main.css',
					icon:'#icon-file_type_css'
				}, {
					id: 32,
					label: 'index.css',
					icon:'#icon-file_type_css'
				}]
			}, {
				id: 4,
				label: 'js',
				icon:'#icon-folder-js',
				children: [{
					id: 41,
					label: 'index.js',
					icon:'#icon-file_type_js'
				}, {
					id: 42 ,
					label: 'index.css',
					icon:'#icon-file_type_js'
				}]
			}, {
				id: 5,
				label: 'html',
				icon:'#icon-folder-views',
				children: [{
					id: 51,
					label: 'index.html',
					icon:'#icon-file_type_html'
				}, {
					id: 52 ,
					label: 'index.html',
					icon:'#icon-file_type_html'
				}]
			}];
			return {
				data4: JSON.parse(JSON.stringify(data)),
				data5: JSON.parse(JSON.stringify(data)),
				props: {
					label: 'name',
					children: 'zones'
				},
				count: 1
			};
		},
		methods: {
			cc(data){
				console.log(data);
			},
			handleCheckChange(data, checked, indeterminate) {
				console.log(data, checked, indeterminate);
			},
			handleNodeClick(data) {
				console.log(data);
			},
			loadNode(node, resolve) {
				if (node.level === 0) {
					return resolve([{
						name: 'region1'
					}, {
						name: 'region2'
					}]);
				}
				if (node.level > 3) return resolve([]);
				var hasChild;
				if (node.data.name === 'region1') {
					hasChild = true;
				} else if (node.data.name === 'region2') {
					hasChild = false;
				} else {
					hasChild = Math.random() > 0.5;
				}
				setTimeout(() => {
					var data;
					if (hasChild) {
						data = [{
							name: 'zone' + this.count++
						}, {
							name: 'zone' + this.count++
						}];
					} else {
						data = [];
					}
					resolve(data);
				}, 500);
			},
			append(data) {
				const newChild = {
					id: id++,
					label: 'testtest',
					icon:'#icon-file_type_new',
					children: []
				};
				if (!data.children) {
					this.$set(data, 'children', []);
				}
				data.children.push(newChild);
			},

			remove(node, data) {
				const parent = node.parent;
				const children = parent.data.children || parent.data;
				const index = children.findIndex(d => d.id === data.id);
				children.splice(index, 1);
			},

			renderContent(h, {
				node,
				data,
				store
			}) {
				return ( 
					<span class = "custom-tree-node" ><span > {node.label} </span> <span>
					<el-button size = "mini" type = "text" on-click = {() => this.append(data)} > Append </el-button> <el-button size = "mini"type = "text" on-click = {() => this.remove(node, data)} > Delete</el-button></span></span>);
				}
			}
		};
</script>
<style>
	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
	}
	.icon {
		width: 1.4em;
		height: 1.4em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		margin-right: 8px;
	}
	.aligin-center{
		display: flex;
		align-items: center;
	}
</style>