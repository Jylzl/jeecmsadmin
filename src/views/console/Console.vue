<template>
	<div>
		<el-row class="m-l-20">
			<el-col :span="6" class="p-lr-20">
				<div class="bg-box">
					<div class="bg-green bg-icon">
						<icon name="content" scale="4"></icon>
						<p class="icon-title">内容发布数</p>
					</div>
					<div class="bg-info">
						<p class="today-count">今日&nbsp;&nbsp;<span class="count-num">0&nbsp;</span> <span class="up-num">(0)</span></p>
						<p class="all-count">累计:&nbsp;&nbsp;0</p>
					</div>
				</div>
			</el-col>
			<el-col :span="6" class="p-lr-20">
				<div class="bg-box">
					<div class="bg-yellow bg-icon">
						<icon name="comment" scale="4"></icon>
						<p class="icon-title">评论数</p>
					</div>
					<div class="bg-info">
						<p class="today-count">今日&nbsp;&nbsp;<span class="count-num">0&nbsp;</span> <span class="up-num">(0)</span></p>
						<p class="all-count">累计:&nbsp;&nbsp;0</p>
					</div>
				</div>
			</el-col>
			<el-col :span="6" class="p-lr-20">
				<div class="bg-box">
					<div class="bg-blue bg-icon">
						<icon name="list" scale="4"></icon>
						<p class="icon-title">留言数</p>
					</div>
					<div class="bg-info">
						<p class="today-count">今日&nbsp;&nbsp;<span class="count-num">0&nbsp;</span> <span class="up-num">(0)</span></p>
						<p class="all-count">累计:&nbsp;&nbsp;0</p>
					</div>
				</div>
			</el-col>
			<el-col :span="6" class="p-lr-20">
				<div class="bg-box">
					<div class="bg-purple bg-icon">
						<icon name="news" scale="4"></icon>
						<p class="icon-title">待办</p>
					</div>
					<div class="bg-info">
						<p class="today-count">今日&nbsp;&nbsp;<span class="count-num">0&nbsp;</span> <span class="up-num">(0)</span></p>
						<p class="all-count">累计:&nbsp;&nbsp;0</p>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row class="m-l-20 m-t-20">
			<el-col :span="12" class="p-lr-20">
				<el-card class="box-card" shadow="never">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-dropdown style="float: right; padding: 3px 0" trigger="click">
							<span class="el-dropdown-link">
								<i class="el-icon-more" style="font-size:22px;font-weight:bold;"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>黄金糕</el-dropdown-item>
								<el-dropdown-item>狮子头</el-dropdown-item>
								<el-dropdown-item>螺蛳粉</el-dropdown-item>
								<el-dropdown-item disabled>双皮奶</el-dropdown-item>
								<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
			</el-col>
			<el-col :span="12" class="p-lr-20">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">
							<i class="el-icon-more"></i>
						</el-button>
					</div>
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped>
	.m-l-20 {
		margin-left: -12px;
		margin-right: -12px;
	}

	.p-lr-20 {
		box-sizing: border-box;
		padding: 0 12px;
	}

	.m-t-20{
		margin-top: 20px;
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

	.today-count .count-num {
		font-size: 18px;
		position: relative;
		top: 2px;
		margin-right: 4px;
		color: #353535;
	}

	.today-count .up-num {
		font-size: 14px;
		color: #ff724c;
	}

	.el-card {
		border-radius: 0;
		border: none;
	}
	
	.el-card__header {
		height: 44px;
		line-height: 44px;
		padding: 6px 20px;
		border-bottom: none;
	}
</style>
