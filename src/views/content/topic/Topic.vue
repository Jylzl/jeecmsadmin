<template>
	<el-tabs type="border-card">
		<el-tab-pane label="树结构">
			<div style="width:280px;">
				<el-tree :data="data5" node-key="id"  @node-contextmenu="contextmenu()" @node-click="handleNodeClick">
				<div class="custom-tree-node" slot-scope="{ node, data }" @check-change="handleCheckChange(node, data)">
					<div class="aligin-center" :data-id="filterType(node.label,1)">
						<svg class="icon svg-icon" aria-hidden="true">
							<use :xlink:href="filterType(node.label,1)"></use>
						</svg>
						<el-input v-model="node.label" placeholder="请输入内容" size="mini" class="change-filename" v-if="false"></el-input>
						<span v-else>{{ node.label }}</span>
					</div>
					<div>
						<el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
						<el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
						<el-button type="text" size="mini" @click="() => append(data)">修改</el-button>
					</div>
				</div>
			</el-tree>
			</div>
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
import {folder} from '@/assets/iconfont/iconfont_folder.js'
import {fileType} from '@/assets/iconfont/iconfont_file_type.js'
const fileTypeJson = require('@/config/fileType.json')
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
					label: 'img_bg.images',
					icon:'#icon-file_type_image'
				}, {
					id: 22,
					label: 'img_bg.jpg',
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
					label: 'index.js',
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
				obj : {},
				data4: JSON.parse(JSON.stringify(data)),
				data5: JSON.parse(JSON.stringify(data)),
				props: {
					label: 'name',
					children: 'zones'
				},
				count: 1,
				menudata:{
                    // 菜单box的样式   Menu box style
                    boxStyle:"width:150px;background:rgb(84, 92, 100);box-sizing: border-box;",
                    // 菜单选项的样式 Style of menu options
                    optionStyle:"color:#fff;line-height:30px;font-size:15px;",
                    menus:[
                        {
                        /**
                         * content 菜单显示的文字 <支持html> 
                         * callback：菜单点击要触发函数  需要在methods定义 
                         * style ： 本项菜单的单独样式 可以覆盖掉optionStyle  
                         * icon : icon图片地址
                         * iconStyle: icon 图片的样式（例如大小等 直接作用于图片）
                         * iconPosition : 支持left / right (其余全部按照left处理);
                         * content The text displayed on the menu(can use html)
                         * callback: Menu clicks to trigger functions need to be defined in methods
                         * style :  The single style of this menu can override option Style
                         * icon : your icon's url
                         * iconStyle : you icon's style ,is image's style
                         * iconPosition :you can use left or right ;The rest are all processed according to left
                         */
                        /**
                         * 字段(field)           类型(type)                 是否可以为空(is can null)    默认值
                         * content            [ html | text ]                       Y                   ""
                         * callback           [  methods function ]                 Y                   return false
                         * style                   [ css ]                          Y                   ""
                         * icon                   [ url ]                           Y                   ""
                         * iconStyle              [ css ]                           Y                   ""
                         * iconPosition           [string]                          Y                   "left"
                        */
                        content:"新建文件",
						callback:"callbackMethods",
						style:"text-indent: 2em;text-align: left;"
                        },
                        {
                        content:"新建文件夹",
                        callback:"otherMethods",
						style:"text-indent: 2em;text-align: left;"
                        },
                        {
                        content:"重命名",
                        callback:"otherMethods",
						style:"text-indent: 2em;text-align: left;"
                        },
                        {
                        content:"删除",
                        callback:"otherMethods",
						style:"text-indent: 2em;text-align: left;"
                        }
                    ],
                },
			};
		},
		computed : {  //设置计算属性
			fSearch(){
				if(this.keyword){
					return this.list.filter((value)=>{  //过滤数组元素
						return value.includes(this.keyword); //如果包含字符返回true
					});
				}
			}
		},
		mounted(){
			// folder.map(item=>{
			// 	this.obj[item.replace("icon-folder-","")] = item;
			// })
			// console.log(this.obj)
			console.log("fileTypeJson")
			console.log(fileTypeJson)
			console.log(fileTypeJson.fileType[0])
			console.log(fileTypeJson.fileType[1])
			// console.log(fileTypeJson.parseJSON())
			// console.log(this.obj['node'])
			// console.log("folder")
			// console.log(folder)
			// console.log("fileType")
			// console.log(fileType)
			// console.log(this.filterType("node",1,folder)[0])
			// console.log(this.filterType("node",1,folder))
			
		},
		methods: {
			filterType(str){
				var icon,str1;
				if(str.indexOf(".") == -1){ //不存在点则为文件夹名folderType
					// var key,valueArr;
					// fileTypeJson.folderType.map(item=>{
					// 	for(let i in item){
					// 		key = i;
					// 		valueArr = item[i];
					// 	}
					// 	console.log("----------------------------------------------------")
					// 	console.log(key)
					// 	console.log(valueArr)
					// 	str1 = valueArr.filter((value)=>{  //过滤数组元素
					// 			return value.includes(str); //如果包含字符返回true
					// 		})[0];
					// 		if(!str1){
					// 			key = "";
					// 		}
					// 		console.log("1############################################")
					// 		console.log(str1)
					// 		console.log(key)
					// })
					// console.log(item[i])

					
					icon = folder.filter((value)=>{  //过滤数组元素
						return value.includes(str); //如果包含字符返回true
					})[0];
					console.log("icona--"+icon)
					icon = icon?icon:'icon-folder-close';
					
				}else{
					icon = fileType.filter((value)=>{  //过滤数组元素
						return value.includes(str.split('.')[str.split('.').length - 1]); //如果包含字符返回true
					})[0];
					icon = icon?icon:'icon-file_type_new';
				}
				return '#'+icon;
			},
			contextmenu(event,object,value,element){
				alert('右键')
				console.log(event)
				console.log(object)
				console.log(value)
				console.log(element)
			},
			callbackMethods(){
                // do something
                alert('aa')
            },
            otherMethods(str){
                // do something
                 console.log(str)
            },
			cc(data){
				console.log(data);
			},
			handleCheckChange(data, checked, indeterminate) {
				console.log(data, checked, indeterminate);
			},
			handleNodeClick(data) {
				console.log(data);
				this.icon =  data.icon+"-open"
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
		width: 1.42em;
		height: 1.42em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		margin-right: 8px;
	}
	.aligin-center{
		display: flex;
		align-items: center;
	}
	.change-filename input{
		box-sizing: border-box;
		padding: 0;
		height: auto;
		height: 24px !important;
		font-size: 14px;
		border: none;
		border-bottom: 1px solid #1F6FB5;
		border-radius: 0;
	}
</style>