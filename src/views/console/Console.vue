<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="6" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class="bg-box">
          <div class="bg-green bg-icon">
            <icon name="content" :w="48" :h="48"></icon>
            <p class="icon-title">内容发布数</p>
          </div>
          <div class="bg-info">
            <p class="today-count">
              <span class="todat-title">今日</span>
              <span class="count-num">0&nbsp;</span>
              <span class="up-num">(0)</span>
            </p>
            <p class="all-count">累计:&nbsp;&nbsp;0</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class="bg-box">
          <div class="bg-yellow bg-icon">
            <icon name="comment" :w="48" :h="48"></icon>
            <p class="icon-title">评论数</p>
          </div>
          <div class="bg-info">
            <p class="today-count">
              <span class="todat-title">今日</span>
              <span class="count-num">0&nbsp;</span>
              <span class="up-num">(0)</span>
            </p>
            <p class="all-count">累计:&nbsp;&nbsp;0</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class="bg-box">
          <div class="bg-blue bg-icon">
            <icon name="list" :w="48" :h="48"></icon>
            <p class="icon-title">留言数</p>
          </div>
          <div class="bg-info">
            <p class="today-count">
              <span class="todat-title">今日</span>
              <span class="count-num">0&nbsp;</span>
              <span class="up-num">(0)</span>
            </p>
            <p class="all-count">累计:&nbsp;&nbsp;0</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class="bg-box">
          <div class="bg-purple bg-icon">
            <icon name="news" :w="48" :h="48"></icon>
            <p class="icon-title">待办</p>
          </div>
          <div class="bg-info">
            <p class="today-count">
              <span class="todat-title">今日</span>
              <span class="count-num">0&nbsp;</span>
              <span class="up-num">(0)</span>
            </p>
            <p class="all-count">累计:&nbsp;&nbsp;0</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix card-header">
            <span>卡片名称</span>
            <el-dropdown style="float: right;" trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>刷新</el-dropdown-item>
                <el-dropdown-item>关闭</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <ve-line :data="chartData2"></ve-line>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix card-header">
            <span>卡片名称</span>
            <el-dropdown style="float: right;" trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>刷新</el-dropdown-item>
                <el-dropdown-item>关闭</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <ve-ring :data="chartData1"></ve-ring>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix card-header">
            <span>卡片名称</span>
            <el-dropdown style="float: right;" trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>刷新</el-dropdown-item>
                <el-dropdown-item>关闭</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <ve-line :data="chartData2"></ve-line>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix card-header">
            <span>卡片名称</span>
            <el-dropdown style="float: right;" trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>刷新</el-dropdown-item>
                <el-dropdown-item>关闭</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div style="height:400px;">
            <el-table
              :data="tableData"
              stripe
              style="width: 100%"
              ref="multipleTable"
              tooltip-effect="dark"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="date" label="日期" width="180" sortable></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {
    'full-calendar': require('vue-fullcalendar')
  },
  data() {
    return {
      chartData1: {
        columns: ['日期', '访问用户'],
        rows: [{
          '日期': '1/1',
          '访问用户': 1393
        },
        {
          '日期': '1/2',
          '访问用户': 3530
        },
        {
          '日期': '1/3',
          '访问用户': 2923
        },
        {
          '日期': '1/4',
          '访问用户': 1723
        },
        {
          '日期': '1/5',
          '访问用户': 3792
        },
        {
          '日期': '1/6',
          '访问用户': 4593
        }
        ]
      },
      chartData2: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [{
          '日期': '1/1',
          '访问用户': 1393,
          '下单用户': 1093,
          '下单率': 0.32
        },
        {
          '日期': '1/2',
          '访问用户': 3530,
          '下单用户': 3230,
          '下单率': 0.26
        },
        {
          '日期': '1/3',
          '访问用户': 2923,
          '下单用户': 2623,
          '下单率': 0.76
        },
        {
          '日期': '1/4',
          '访问用户': 1723,
          '下单用户': 1423,
          '下单率': 0.49
        },
        {
          '日期': '1/5',
          '访问用户': 3792,
          '下单用户': 3492,
          '下单率': 0.323
        },
        {
          '日期': '1/6',
          '访问用户': 4593,
          '下单用户': 4293,
          '下单率': 0.78
        }
        ]
      },
      tableData: [],
      multipleSelection: []
    }
  },
  methods: {
  },
  mounted() {
    var _this = this;
    var arrs = [{
      date: '2016-05-02',
      name: '王小虎a',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎b',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎c',
      address: '上海市普陀区金沙江路 1516 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎d',
      address: '上海市普陀区金沙江路 1515 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎d',
      address: '上海市普陀区金沙江路 1515 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎e',
      address: '上海市普陀区金沙江路 1514 弄'
    }]
    setTimeout(() => {
      _this.tableData = [];
      arrs.forEach(arr => {
        _this.tableData.push(arr)
      });
    }, 2000)
  }
}
</script>

<style scoped>
/* 样式重写 Start*/
.el-card {
  border-radius: 0;
  border: none;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  font-size: 22px;
  font-weight: bold;
}
.card-header {
  line-height: 22px;
}
.el-row {
  padding-bottom: 20px;
}
/* 样式重写 End*/

.m-b-20 {
  margin-bottom: 20px;
}
.bg-box {
  background: #fff;
  height: 112px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.bg-box .bg-green {
  background: #17d57e;
}
.bg-box .bg-yellow {
  background: #fec92b;
}
.bg-box .bg-blue {
  background: #2da3fb;
}
.bg-box .bg-purple {
  background: #c172d8;
}
.bg-icon {
  box-sizing: border-box;
  text-align: center;
  padding-top: 22px;
  width: 35%;
  height: 100%;
}
.bg-icon .icon-title {
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
.bg-info {
  width: 65%;
  padding: 24px;
  text-align: left;
}
.today-count {
  color: #5a5e66;
  font-size: 18px;
}
.all-count {
  font-size: 14px;
  color: #999;
  margin-top: 20px;
}
.today-count .todat-title {
  margin-right: 10px;
}
.today-count .count-num {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-right: 4px;
  color: #353535;
}
.today-count .up-num {
  font-size: 14px;
  color: #ff724c;
}
</style>
