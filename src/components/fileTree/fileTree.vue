<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-09 10:36:03
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-09 11:00:31
 -->
<template>
    <div class="file-tree">
        <div class="file-tree-top">
            <el-button type="text">
                <i class="el-icon-refresh"></i>&nbsp;&nbsp;刷新
            </el-button>
            <el-button type="text">编辑</el-button>
        </div>
        <div class="file-tree-center">
            <el-scrollbar wrap-class="scrollbar-wrapper">
                <el-tree :data="data5" node-key="id" @node-contextmenu="contextmenu()" @node-click="handleNodeClick">
                    <div class="custom-tree-node" slot-scope="{ node, data }"
                        @check-change="handleCheckChange(node, data)">
                        <div class="aligin-center">
                            <svg class="icon svg-icon" aria-hidden="true">
                                <use :xlink:href="filterType(data.icon)" />
                            </svg>
                            <el-input v-model="node.label" placeholder="请输入内容" size="mini" class="change-filename"
                                v-if="false"></el-input>
                            <span v-else>{{ node.label }}</span>
                        </div>
                        <div>
                            <!-- <el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
							<el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>-->
                        </div>
                    </div>
                </el-tree>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
	import {
		folder
	} from "@/assets/iconfont/iconfont_folder.js";
	import {
		fileType
	} from "@/assets/iconfont/iconfont_file_type.js";
	const fileTypeJson = require("@/config/fileType.json");
	let id = 1000;
	export default {
		components: {
		},
		data() {
			const data = [{
					id: 1,
					label: "images",
					icon: "images",
					children: [{
							id: 11,
							label: "img_bg.png",
							icon: "img_bg.png"
						},
						{
							id: 12,
							label: "img_header.png",
							icon: "img_header.png"
						}
					]
				},
				{
					id: 2,
					label: "img",
					icon: "img",
					children: [{
							id: 21,
							label: "img_bg.png",
							icon: "img_bg.png"
						},
						{
							id: 22,
							label: "img_bg.jpg",
							icon: "img_bg.jpg"
						},
						{
							id: 23,
							label: "img_bg.gif",
							icon: "img_bg.gif"
						}
					]
				},
				{
					id: 3,
					label: "css",
					icon: "css",
					children: [{
							id: 31,
							label: "main.css",
							icon: "main.css"
						},
						{
							id: 32,
							label: "index.css",
							icon: "index.css"
						}
					]
				},
				{
					id: 4,
					label: "js",
					icon: "js",
					children: [{
							id: 41,
							label: "index.js",
							icon: "index.js"
						},
						{
							id: 42,
							label: "index.js",
							icon: "index.js"
						}
					]
				},
				{
					id: 5,
					label: "html",
					icon: "html",
					children: [{
							id: 51,
							label: "index.html",
							icon: "index.html"
						},
						{
							id: 52,
							label: "index.htm",
							icon: "index.htm"
						}
					]
				},
				{
					id: 6,
					label: "word",
					icon: "word",
					children: [{
							id: 61,
							label: "index",
							icon: "index",
							children: [{
									id: 611,
									label: "index.doc",
									icon: "index.doc"
								},
								{
									id: 612,
									label: "index.docx",
									icon: "index.docx"
								}
							]
						},
						{
							id: 62,
							label: "index.docx",
							icon: "index.docx"
						}
					]
				},
				{
					id: 7,
					label: "docs",
					icon: "docs",
					children: [{
							id: 71,
							label: "index.doc",
							icon: "index.doc"
						},
						{
							id: 72,
							label: "index.docx",
							icon: "index.docx"
						},
						{
							id: 73,
							label: "index.pptx",
							icon: "index.pptx"
						},
						{
							id: 74,
							label: "index.xls",
							icon: "index.xls"
						}
					]
				}
			];
			return {
				data5: JSON.parse(JSON.stringify(data))
			};
		},
		watch: {},
		mounted() {},
		methods: {
			//根据文件名，文件夹名生成svg图标名称
			filterType(str) {
				var idOpen = str.includes("open") ? true : false;
				var icon, str1, key, keys, valueArr;
				if (str.indexOf(".") == -1) {
					//不存在点则为文件夹名folderType
					if (/.*[\u4e00-\u9fa5]+.*$/.test(str)) {
						//如果存在中文直接返回默认文件夹图标
						return "#icon-folder-close";
					}
					for (let i = 0; i < fileTypeJson.folderType.length; i++) {
						for (let j in fileTypeJson.folderType[i]) {
							key = j;
							valueArr = fileTypeJson.folderType[i][j];
							str1 = valueArr.filter(value => {
								//过滤数组元素
								return value.includes(str.replace("-open", "")); //如果包含字符返回true
							})[0];
							if (!str1) {
								key = str.replace("-open", "");
							} else {
								keys = true;
								break;
							}
						}
						if (keys) {
							break;
						}
					}
					icon = folder.filter(value => {
						//过滤数组元素
						return value.includes(key); //如果包含字符返回true
					})[0];
					icon = icon ? icon : "icon-folder-close";
				} else {
					if (/.*[\u4e00-\u9fa5]+.*$/.test(str)) {
						//如果存在中文直接返回默认文件图标
						return "#icon-file_type_new";
					}
					for (let i = 0; i < fileTypeJson.fileType.length; i++) {
						for (let j in fileTypeJson.fileType[i]) {
							key = j;
							valueArr = fileTypeJson.fileType[i][j];
							str1 = valueArr.filter(value => {
								//过滤数组元素
								return value.includes(
									str.split(".")[str.split(".").length - 1]
								); //如果包含字符返回true
							})[0];
							if (!str1) {
								key = str.split(".")[str.split(".").length - 1];
							} else {
								keys = true;
								break;
							}
						}
						if (keys) {
							break;
						}
					}
					icon = fileType.filter(value => {
						//过滤数组元素
						return value.includes(key); //如果包含字符返回true
						// return value == key; //如果包含字符返回true
					})[0];
					icon = icon ? icon : "icon-file_type_new";
				}
				if (idOpen) {
					return "#" + icon + "-open";
				} else {
					return "#" + icon;
				}
            },
            // 节点右键
			contextmenu(event, object, value, element) {
				alert("右键");
				console.log(event);
				console.log(object);
				console.log(value);
				console.log(element);
            },
            // 点击
			handleNodeClick(data) {
				if (data.icon.indexOf(".") == -1) {
					if (data.icon.includes("open")) {
						data.icon = data.icon.replace("-open", "");
					} else {
						data.icon = data.icon + "-open";
					}
				} else {
					return;
				}
			}
		}
	};
</script>

<style scoped>
    .file-tree {
        height: 100%;
    }

    .file-tree-top {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        height: 50px;
        padding: 5px;
        line-height: 40px;
    }

    .file-tree-center {
        height: calc(100% - 50px);
    }
</style>