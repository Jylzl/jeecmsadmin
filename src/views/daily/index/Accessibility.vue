<template>
    <div>
        <el-table :data="tableData2" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}"
            :row-class-name="tableRowClassName" border>
            <el-table-column type="index" width="60" align="center"></el-table-column>
            <el-table-column prop="date" label="监测时刻" sortable width="180" align="center"></el-table-column>
            <el-table-column prop="name" label="可访问性" width="120" align="center"></el-table-column>
            <el-table-column prop="address" label="站点名称"></el-table-column>
            <el-table-column prop="link" label="地址"></el-table-column>
            <el-table-column prop="date" label="最近连通时间" width="180" align="center"></el-table-column>
            <el-table-column prop="date" label="最近断开时间" width="180" align="center"></el-table-column>
            <el-table-column prop="total" label="断开次数" width="180"></el-table-column>
        </el-table>
        <div style="text-align:right;margin-top:15px;">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="page" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                :total="pageTotal">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    export default {
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        },
        data() {
            return {
                page: 4,
                pageSize: 10,
                pageTotal: 50,
                tableData2: [{
                    date: '2016-05-02 12:11:30',
                    name: '连通',
                    address: '孝感市门户网站',
                    link: 'xiaogam.gov.cn',
                    total: 11
                }, {
                    date: '2016-05-04 22:23:41',
                    name: '连通',
                    address: '司法局',
                    link: 'sfj.xiaogam.gov.cn',
                    total: 12
                }, {
                    date: '2016-05-01 15:44:12',
                    name: '断开',
                    address: '卫计委',
                    link: 'wjw.xiaogam.gov.cn',
                    total: 21
                }, {
                    date: '2016-05-03 09:30:11',
                    name: '连通',
                    address: '高新区',
                    link: 'gxq.xiaogam.gov.cn',
                    total: 34
                }]
            }
        }
    }
</script>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>