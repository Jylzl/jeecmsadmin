<template>
	<el-container>
		<el-aside width="280px">
			<div class="left-top">
				<el-button type="text"><i class="el-icon-refresh"></i>&nbsp;&nbsp;刷新</el-button>
				<el-button type="text">编辑</el-button>
			</div>
			<div class="left-center">
				<el-scrollbar wrap-class="scrollbar-wrapper">
                    <el-tree :data="data5" node-key="id"  @node-contextmenu="contextmenu()" @node-click="handleNodeClick">
                        <div class="custom-tree-node" slot-scope="{ node, data }" @check-change="handleCheckChange(node, data)">
                            <div class="aligin-center">
                                <svg class="icon svg-icon" aria-hidden="true">
                                    <use :xlink:href="filterType(data.icon)"></use>
                                </svg>
                                <el-input v-model="node.label" placeholder="请输入内容" size="mini" class="change-filename" v-if="false"></el-input>
                                <span v-else>{{ node.label }}</span>
                            </div>
                            <div>
                                <!-- <el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
                                <el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button> -->
                            </div>
                        </div>
                    </el-tree>
				</el-scrollbar>
			</div>
		</el-aside>
		<el-main>
			<div class="right-top">
				<div class="right-top-left">
					 <el-radio-group v-model="radio" size="mini">
						<el-radio-button label="只读"></el-radio-button>
						<el-radio-button label="可写"></el-radio-button>
					</el-radio-group>
					<el-select v-model="value" size="mini" placeholder="主题" style="width:100px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" size="mini" placeholder="字号" style="width:100px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="right-top-right">
					<el-button type="primary" size="mini" icon="el-icon-news">保存</el-button>
				</div>
			</div>
			<div class="right-table">
                <div id="container" style="height:100%;"></div>
			</div>
		</el-main>
	</el-container>
</template>
<script>
    import * as monaco from 'monaco-editor';
    import {folder} from '@/assets/iconfont/iconfont_folder.js'
    import {fileType} from '@/assets/iconfont/iconfont_file_type.js'
    const fileTypeJson = require('@/config/fileType.json')
    let id = 1000;
	export default {
		data() {
            const data = [{
				id: 1,
				label: 'images',
				icon: 'images',
				children: [{
					id: 11,
					label: 'img_bg.png',
					icon: 'img_bg.png'
				}, {
					id: 12,
					label: 'img_header.png',
					icon: 'img_header.png'
				}]
			}, {
				id: 2,
				label: 'img',
				icon: 'img',
				children: [{
					id: 21,
					label: 'img_bg.png',
					icon: 'img_bg.png'
				}, {
					id: 22,
					label: 'img_bg.jpg',
					icon: 'img_bg.jpg'
				}, {
					id: 23,
					label: 'img_bg.gif',
					icon: 'img_bg.gif'
				}]
			}, {
				id: 3,
				label: 'css',
				icon: 'css',
				children: [{
					id: 31,
					label: 'main.css',
					icon: 'main.css'
				}, {
					id: 32,
					label: 'index.css',
					icon: 'index.css'
				}]
			}, {
				id: 4,
				label: 'js',
				icon: 'js',
				children: [{
					id: 41,
					label: 'index.js',
					icon: 'index.js'
				}, {
					id: 42 ,
					label: 'index.js',
					icon: 'index.js'
				}]
			}, {
				id: 5,
				label: 'html',
				icon: 'html',
				children: [{
					id: 51,
					label: 'index.html',
					icon: 'index.html'
				}, {
					id: 52 ,
					label: 'index.htm',
					icon: 'index.htm'
				}]
			}, {
				id: 6,
				label: 'word',
				icon: 'word',
				children: [{
					id: 61,
					label: 'index',
					icon: 'index',
					children: [{
					id: 611,
					label: 'index.doc',
					icon: 'index.doc'
				}, {
					id: 612 ,
					label: 'index.docx',
					icon: 'index.docx'
				}]
				}, {
					id: 62 ,
					label: 'index.docx',
					icon: 'index.docx'
				}]
			}, {
				id: 7,
				label: 'docs',
				icon: 'docs',
				children: [{
					id: 71,
					label: 'index.doc',
					icon: 'index.doc'
				}, {
					id: 72 ,
					label: 'index.docx',
					icon: 'index.docx'
				},{
					id: 73,
					label: 'index.pptx',
					icon: 'index.pptx'
				}, {
					id: 74 ,
					label: 'index.xls',
					icon: 'index.xls'
				}]
			}];
			return {
                data4: JSON.parse(JSON.stringify(data)),
				data5: JSON.parse(JSON.stringify(data)),
				multipleSelection: [],
				defaultProps: {
					children: "children",
					label: "label"
				},
				options: [{
						value: "白色主题",
						label: "白色主题"
					},
					{
						value: "黑色主题",
						label: "黑色主题"
					}
				],
				value: "",
				input: "",
				input5: "",
				select: "",
				radio:""
			};
		},
		 mounted() {
             monaco.editor.create(document.getElementById("container"), {
                value: "function hello() {\n\talert('Hello world!');\n}",
                language: "javascript",
                readOnly: true,
                fontSize: 16,
                theme:'vs',//vs默认,hc-black高亮,vs-dark深色
            });

		},
		methods: {
			//根据文件名，文件夹名生成svg图标名称
			filterType(str){
				var idOpen = str.includes("open")?true:false;
				var icon,str1,key,keys,valueArr;
				if(str.indexOf(".") == -1){ //不存在点则为文件夹名folderType
					if(/.*[\u4e00-\u9fa5]+.*$/.test(str)){  //如果存在中文直接返回默认文件夹图标
						return "#icon-folder-close"
					}
					for(let i=0;i<fileTypeJson.folderType.length;i++){
						for(let j in fileTypeJson.folderType[i]){
							key = j;
							valueArr = fileTypeJson.folderType[i][j];
							str1 = valueArr.filter((value)=>{  //过滤数组元素
								return value.includes(str.replace("-open","")); //如果包含字符返回true
							})[0];
							if(!str1){
								key = str.replace("-open","");
							}else{
								keys = true;
								break;
							}
						}
						if(keys){
							break;
						}
					}
					icon = folder.filter((value)=>{  //过滤数组元素
						return value.includes(key); //如果包含字符返回true
					})[0];
					icon = icon?icon:'icon-folder-close';
				}else{
					if(/.*[\u4e00-\u9fa5]+.*$/.test(str)){  //如果存在中文直接返回默认文件图标
						return "#icon-file_type_new"
					}
					for(let i=0;i<fileTypeJson.fileType.length;i++){
						for(let j in fileTypeJson.fileType[i]){
							key = j;
							valueArr = fileTypeJson.fileType[i][j];
							str1 = valueArr.filter((value)=>{  //过滤数组元素
								return value.includes(str.split('.')[str.split('.').length - 1]); //如果包含字符返回true
							})[0];
							if(!str1){
								key = str.split('.')[str.split('.').length - 1];
							}else{
								keys = true;
								break;
							}
						}
						if(keys){
							break;
						}
					}
					icon = fileType.filter((value)=>{  //过滤数组元素
						return value.includes(key); //如果包含字符返回true
						// return value == key; //如果包含字符返回true
					})[0];
					icon = icon?icon:'icon-file_type_new';
				}
				if(idOpen){
					return '#'+icon+"-open";
				}else{
					return '#'+icon;
				}
			},
			contextmenu(event,object,value,element){
				alert('右键')
				console.log(event)
				console.log(object)
				console.log(value)
				console.log(element)
            },
            handleNodeClick(data) {
				if(data.icon.indexOf(".") == -1){
					if(data.icon.includes("open")){
						data.icon = data.icon.replace("-open","")
					}else{
						data.icon = data.icon+"-open"
					}
				}else{
					return;
				}
			}
		}
	};
</script>
<style scoped>
	.el-container {
		height: calc(100% - 48px);
	}

	.el-aside {
		box-sizing: border-box;
		border-right: 1px solid #d4dde2;
		background-color: #fff;
		line-height: 1;
	}

	.left-top {
		display: flex;
		justify-content:space-between;
		box-sizing: border-box;
		height: 50px;
		padding: 5px;
		line-height: 40px;
	}

	.right-top,
	.right-center {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/*垂直居中*/
		box-sizing: border-box;
		height: 50px;
		padding: 5px 15px;
		line-height: 40px;
		border-bottom: 1px dashed #e7ecf3;
	}

	.right-table {
		height: calc(100% - 50px);
	}

	.right-bottom {
		display: flex;
		flex-direction: row;
		justify-content: center;
		box-sizing: border-box;
		height: 50px;
		padding: 10px 15px;
	}

	.right-bottom .el-button+.el-button {
		margin-left: 3px;
	}

	.right-top .right-top-left>div {
		margin-right: 15px;
	}

	.right-top .right-top-left>div:last-child {
		margin-right: 0;
	}

	.right-center .right-center-right {
		display: flex;
		flex-direction: row;
		align-items: center;
		/*垂直居中*/
	}

	.right-center .right-center-right>button {
		margin-left: 15px;
	}

	.right-center .right-center-right>label {
		margin-left: 15px;
		white-space: nowrap;
		color: #666;
	}

	.right-center .right-center-right>label:first-child {
		margin-left: 0;
	}

	.el-breadcrumb {
		line-height: 40px;
	}

	.left-center {
		height: calc(100% - 50px);
	}

	.el-main {
		background-color: #fff;
		padding: 0;
	}
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
		/* vertical-align: -0.15em; */
		vertical-align: middle;
		fill: currentColor;
		overflow: hidden;
		margin-right: 8px;
	}
	.el-tree-node__children .icon{
		width: 1.36em;
		height: 1.36em;
	}
</style>