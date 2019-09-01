<template>
	<div style="height:100%">
		<div class="left-top">
			<el-button type="text" @click="reflashClick"><i
					:class="{'el-icon-refresh':refash,'el-icon-loading':!refash}"></i>&nbsp;&nbsp;刷新</el-button>
			<el-button type="text" @click.self="clickEvent" v-if="copy">复制栏目</el-button>
		</div>
		<div class="left-center">
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<el-tree :props="props" :load="ansyTree" lazy :indent='16' node-key="id" :default-expanded-keys="['']"
					@node-click="getNodes" v-if="refash" :default-expand-all="true">
					<span class="custom-tree-node" slot-scope="{ node, data }">
						<span :title="node.label" :data-data="data">{{ node.label }}</span>
					</span>
				</el-tree>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			copy: {
				type: Boolean,
				default: false
			},
			hasContent: {
				type: Boolean,
				default: false
			}
		},

		data() {
			return {
				props: {
					label: "name",
					children: "zones",
					isLeaf: "isChild",
					id: "id"
				},
				root: "",
				refash: true,
				rotating: true
			};
		},
		methods: {
			clickEvent() {
				this.routerLink("/channel/copy", "copy", 0);
			},
			reflashClick() {
				this.refash = false;
				setTimeout(() => {
					this.refash = true;
				}, 100);
			},
			getNodes(data, node) {
				this.$emit("change", data, node);
			},
			ansyTree(node, resolve) {
				let api = this.$api;
				//异步加载树形结构
				if (node.level === 0) {
					return resolve([{
						name: "根目录",
						id: ""
					}]);
				}
				if (node.level > 0) {
					this.rotating = true;
					this.$axios
						.post(api.contentTree, {
							root: node.data.id,
							hasContent: this.hasContent
						})
						.then(res => {
							this.rotating = false;
							const data = [];
							for (let i in res.body) {
								let obj = {};
								obj.id = res.body[i].id;
								obj.isChild = res.body[i].childCount > 0 ? false : true;
								obj.name = res.body[i].name;
								obj.data = res.body;
								data.push(obj);
							}
							return resolve(data);
						})
						.catch(error => {
							this.rotating = false;
						});
				}
			}
		}
	};
</script>

<style lang='scss' scoped>
	.left-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		height: 50px;
		padding: 5px;
		line-height: 40px;
	}

	.left-center {
		height: calc(100% - 50px);
	}
</style>