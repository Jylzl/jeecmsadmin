export default {
    data() {
        return {
            loading: true, //遮罩层
            disabled: true, //禁用状态
            ids: "", //多选id
            status: "", //审核状态
            tableData: [], //表格数据
            total: 0, //列表总数
            listUrl: '', //列表地址,
            params: {},
            checkedList: [], //选中的对象
            state: false,
        }
    },
    methods: {
        initTableData(url, params) {
            this.params = params;
            this.listUrl = url;
            this.getTableData(params)
        },
        //获取表格数据
        getTableData(params) {
            this.loading = true;
            this.$axios
                .post(this.listUrl, params)
                .then(res => {
                    if (res.code == '200') {
                        if (res.totalCount != undefined) {
                            this.total = res.totalCount;
                        }
                        this.tableData = res.body;
                        this.state = true;

                    } else {
                        this.tableData = [];
                        this.state = true;
                    }
                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;
                    this.state = false;
                    console.log(error)
                });
        },
        //获取翻页数据
        getPages(pageNo, pageSize) {
            this.params.pageNo = pageNo;
            this.params.pageSize = pageSize;
            this.getTableData(this.params);
        },
        // 选中ID
        checkIds(val) {
            let ids = [];
            for (let i in val) {
                ids.push(val[i].id);
            }
            this.ids = ids.join(",");
            this.disabled = val.length > 0 ? false : true;
            this.checkedList = val;
        },
        //获取选中id和状态status
        checkIdsAndStatus(val) {
            let ids = [];
            let status = [];
            for (let i in val) {
                ids.push(val[i].id);
                status.push(val[i].status);
            }
            this.ids = ids.join(",");
            this.status = status.join(",");
            this.disabled = val.length > 0 ? false : true;
            this.checkedList = val;
        },
        //删除
        deleteBatch(url, ids) {
            this.$confirm('是否确定删除？', '警告', {
                    type: "error"
                })
                .then(() => {
                    this.loading = true;
                    this.$axios.post(url, {
                        ids: ids
                    }).then(res => {
                        if (res.code == "200") {
                            this.successMessage('删除成功');
                            this.getTableData(this.params);
                        } else {
                            this.loading = false;
                        }
                    });
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error)
                });
        },
        //推荐操作
        recommend(state) {
            if (state) {
                this.$prompt('请输入推荐等级', '提示', {
                        inputPattern: /^\d{1,4}$/,
                        inputErrorMessage: '请输入正整数(并且小于9999)'
                    })
                    .then(({
                        value
                    }) => {
                        this.$axios
                            .post(this.$api.contentRecommend, {
                                ids: this.ids,
                                level: value
                            })
                            .then(res => {
                                if (res.code == '200') {
                                    this.successMessage('推荐成功')
                                    this.getTableData(this.params)
                                    this.getAllTotal()
                                }
                            })
                    })
                    .catch(() => {})
            } else {
                this.$axios
                    .post(this.$api.contentRecommend, {
                        ids: this.ids,
                        level: -1
                    })
                    .then(res => {
                        if (res.code == '200') {
                            this.successMessage('取消推荐成功')
                            this.getTableData(this.params)
                            this.getAllTotal()
                        }
                    })
            }
        },
        //移除
        removeBatch(url, roleId, ids) {
            this.$confirm('确定移除吗？', '提示', {
                    type: "error"
                })
                .then(() => {
                    this.loading = true;
                    this.$axios.post(url, {
                        roleId: roleId,
                        userIds: ids
                    }).then(res => {
                        if (res.code == "200") {
                            this.successMessage('移除成功');
                            this.getTableData(this.params);
                        } else {
                            this.loading = false;
                        }
                    });
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error)
                });
        },
        //保存排列循序
        priorityBatch(url, ids, priorities, regDefId) {
            this.$confirm('是否保存排列顺序', '提示', {
                    type: "warning"
                })
                .then(() => {
                    this.loading = true;
                    this.$axios.post(url, {
                        ids: ids,
                        priorities: priorities,
                        regDefId: regDefId
                    }).then(res => {
                        if (res.code == "200") {
                            this.successMessage('操作成功');
                            this.getTableData(this.params);
                        } else {
                            this.loading = false;
                        }
                    });
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error)
                });
        },
        //保存排列循序四个参数
        prioritysBatchs(url, ids, priorities, disableds, regDefId) {
            this.$confirm('是否保存排序？', '提示', {
                    type: "warning"
                })
                .then(() => {
                    this.loading = true;
                    this.$axios.post(url, {
                        ids: ids,
                        priorities: priorities,
                        disableds: disableds,
                        defId: regDefId
                    }).then(res => {
                        if (res.code == "200") {
                            this.successMessage('操作成功');
                            this.getTableData(this.params);
                        } else {
                            this.loading = false;
                        }
                    });
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error)
                });
        },
        //保存排列
        prioritysBatch(url, ids, priorities) {
            this.$confirm('是否保存排序？', '提示', {
                    type: "warning"
                })
                .then(() => {
                    this.loading = true;
                    this.$axios.post(url, {
                        ids: ids,
                        priorities: priorities
                    }).then(res => {
                        if (res.code == "200") {
                            this.successMessage('保存成功');
                            this.getTableData(this.params);
                        } else {
                            this.loading = false;
                        }
                    });
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error)
                });
        },
        //批量还原
        revertBatch(url, ids) {
            this.$confirm('是否确定还原？', '提示', {
                    type: "warning"
                })
                .then(() => {
                    this.loading = true;
                    this.$axios.post(url, {
                        ids: ids
                    }).then(res => {
                        if (res.code == "200") {
                            this.successMessage('还原成功');
                            this.getTableData(this.params);
                        } else {
                            this.loading = false;
                        }
                    });
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error)
                });
        },
        //批量审核
        reviewBatch(url, ids) {
            this.$confirm('是否批量审核', '提示', {
                    type: "warning"
                })
                .then(() => {
                    this.loading = true;
                    this.$axios.post(url, {
                        ids: ids
                    }).then(res => {
                        if (res.code == "200") {
                            this.successMessage('审核成功!');
                            setTimeout(() => {
                                this.getTableData(this.params);
                            }, 800);
                        } else {
                            this.loading = false;
                        }
                    });
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error)
                });
        }
    }
}