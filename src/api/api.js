function setAdminApi(path) {
    let global = '/api/admin/';
    return global + path;
}

const api = {
    bsaeUpload: '/api/member/upload/o_upload', //普通文件上传
    userLogin: '/api/front/user/login', //登录 
    getPerms: '/api/admin/user/getPerms', // 获取用户权限
    loginOut: '/api/member/user/logout', //退出登录
    personalGet: '/api/personal/get', //获取个人资料详情
    validateName: setAdminApi('/member/check_name'), //
    groupList: setAdminApi('group/list'), //会员组列表接口
    groupGet: setAdminApi('group/get'), //会员组详情接口
    groupSave: setAdminApi('group/save'), //新增会员组接口
    groupUpdate: setAdminApi('group/update'), //修改会员组接口
    groupDelete: setAdminApi('group/delete'), //删除会员组接口
    groupPriority: setAdminApi('group/priority'), //批量保存会员组接口
    memberList: setAdminApi('member/list'), //会员分页列表接口
    memberGet: setAdminApi('member/get'), //会员详情接口
    memberGetField: setAdminApi('member/getField'), //会员字段接口
    memberSave: setAdminApi('member/save'), //会员添加接口
    memberUpdate: setAdminApi('member/update'), //会员详情修改
    memberDelete: setAdminApi('member/delete'), //会员详情删除
    memberCheck: setAdminApi('member/check'), //会员详情审核
    roleList: setAdminApi('role/list'), //角色列表
    roleGet: setAdminApi('role/get'), //角色信息
    roleSave: setAdminApi('role/save'), //角色添加
    roleUpdate: setAdminApi('role/update'), //角色更新
    roleDelete: setAdminApi('role/delete'), //角色删除
    roleMembers: setAdminApi('role/member_list'), //角色成员
    roleMembersDelete: setAdminApi('role/member_delete'), //角色成员
    accountList: setAdminApi('account/list'), //1）账户列表接口
    accountDelete: setAdminApi('account/delete'), //2）删除账户接口
    adminGlobleList: setAdminApi('admin/global_list'), //管理员列表(全站)
    adminGlobleDelete: setAdminApi('admin/global_delete'), //管理员删除(全站)
    adminGlobleGet: setAdminApi('admin/global_get'), //管理员详情(全站)
    adminGlobleUpdate: setAdminApi('admin/global_update'), //管理员编辑提交(全站)
    adminGlobleSave: setAdminApi('admin/global_save'), //管理员添加提交(全站)
    adminGlocalList: setAdminApi('admin/local_list'), //管理员添加提交(本站)
    adminGlocalGet: setAdminApi('admin/local_get'), //管理员添加详情(本站)
    adminGlocalSave: setAdminApi('admin/local_save'), //管理员添加提交(本站)
    adminGlocalUpdate: setAdminApi('admin/local_update'), //管理员修改提交(本站)
    adminGlocalDelete: setAdminApi('admin/local_delete'), //管理员删除提交(本站)
    adminValRank: setAdminApi('admin/val_rank'), //校验管理员等级信息
    contentTree: setAdminApi('content/tree'), //内容栏目树接口
    contentList: setAdminApi('content/list'), //nei内容列表接口
    contentPage: setAdminApi('content/page'), //分页数据接口
    contentShareTree: setAdminApi('content/share_tree'), //共享tree接口
    fullTextSearchChannelList: setAdminApi('channel/select'), //全文检索获取栏目下拉列表
    fullTextSearchCreate: setAdminApi('lucene/create'), //生成索引
    siteTree: setAdminApi('site/tree'), //获取站点树结构
    siteList: setAdminApi('site/list'), //站点管理列表接口  
    siteGet: setAdminApi('site/get'), //获取站点管理详情
    siteSave: setAdminApi('site/save'), //添加站点管理
    siteUpdate: setAdminApi('site/update'), //修改站点管理
    siteDelete: setAdminApi('site/delete'), //删除站点管理
    siteCheckMaster: setAdminApi('site/check_master'), //验证是否为主站
    siteCheckAccessPath: setAdminApi('site/check_accessPath'), //验证访问路径是否可用
    siteCheckDomain: setAdminApi('site/check_domain'), //验证域名是否可用

    contentRenuseList: setAdminApi('content/reuse_list'), //获取内容复用信息列表
    contentRenusePage: setAdminApi('content/reuse_page'), //获取内容复用分页信息
    logList: setAdminApi('log/operating_list'), //后台操作日志列表接口
    messageList: setAdminApi('message/list'), //站内信列表接口
    messageGet: setAdminApi('message/get'), //2)  站内信详情接口
    messageRead: setAdminApi('message/read'), //  阅读站内信详细信息
    messageSend: setAdminApi('message/send'), //3)    发送消息接口
    messageSave: setAdminApi('message/save'), //4)    保存草稿接口
    messageToSend: setAdminApi('message/tosend'), //5)    选择发送接口
    messageUpdate: setAdminApi('message/update'), //6)    修改消息接口
    messageForward: setAdminApi('message/forward'), //7)   任意消息详情
    messageReply: setAdminApi('message/reply'), //8)  回复消息详情
    messageTrash: setAdminApi('message/trash'), //9)  移除至回收站接口
    messageRevert: setAdminApi('message/revert'), //10)   还原消息接口
    messageEmpty: setAdminApi('message/empty'), //11) 清空消息接口
    memberCheckName: setAdminApi('member/check_name'), //7）校验用户名接
    siteConfigGet: setAdminApi('site_config/base_get'), //1）站点详情接口
    siteConfigUpdate: setAdminApi('site_config/base_update'), //站点修改接口

    smsList: setAdminApi('sms/list'), //sms短信服务列表
    ossList: setAdminApi('oss/list'), //oss云储存列表
    tplList: setAdminApi('tpl/list'), //首页模板列表
    tplModelList: setAdminApi('tpl/model_list'), //所有的模版列表
    ftpList: setAdminApi('ftp/list'), //FTP管理列表接口
    ftpGet: setAdminApi('ftp/get'), //2）FTP管理详情接口
    ftpSave: setAdminApi('ftp/save'), //3）FTP管理添加接口
    ftpUpdate: setAdminApi('ftp/update'), //4）FTP管理修改接口
    ftpDelete: setAdminApi('ftp/delete'), //5）FTP管理删除接口
    typeList: setAdminApi('type/list'), //1)  内容类型列表接口
    typeGet: setAdminApi('type/get'), //1)    2)  内容类型详情接口
    typeSave: setAdminApi('type/save'), //1)      添加内容类型接口
    typeUpdate: setAdminApi('type/update'), //    内容类型详情接口
    typeDelete: setAdminApi('type/delete'), //    删除内容类型接口
    typeCheckId: setAdminApi('type/check_id'), // 内容类型ID校验
    modelList: setAdminApi('model/list'), //1)    模型管理列表接口
    modelGet: setAdminApi('model/get'), //    模型管理详情接口
    modelSave: setAdminApi('model/save'), //3)    添加模型管理接口
    modelUpdate: setAdminApi('model/update'), //修改模型管理接口
    modelDelete: setAdminApi('model/delete'), //删除模型管理接口
    modelPriority: setAdminApi('model/priority'), //批量保存模型管理接口
    modelCheckId: setAdminApi('model/check_id'), //验证模型ID是否可用
    itemList: setAdminApi('item/list'), //获取模型项列表信息
    itemGet: setAdminApi('item/get'), //获取模型项详细信息
    itemSave: setAdminApi('item/save'), //添加模型项信息
    itemUpdate: setAdminApi('item/update'), //修改模型项信息
    itemDelete: setAdminApi('item/delete'), //删除模型项信息
    itemPriority: setAdminApi('item/priority'), //批量保存模型项信息
    itemListSave: setAdminApi('item/list_save'), //批量保存模型项信息
    itemCheckField: setAdminApi('item/check_field'), //模型项字段校验接口

    configGet: setAdminApi('config/get'), //获取登录设置详情   
    configSystemUpdate: setAdminApi('config/system_update'), //系统设置修改接口
    configLoginGet: setAdminApi('config/login_get'), //获取登录设置详情
    configLoginUpdate: setAdminApi('config/login_update'), //修改登录设置信息，所有数据以JSON格式返回
    configMemberGet: setAdminApi('config/member_get'), //获取会员设置详情
    configMemberUpdate: setAdminApi('config/member_update'), //修改会员设置信息，所有数据以JSON格式返回
    configRegisterItemList: setAdminApi('config/register_item_list'), //获取会员注册模型列表信息，所有数据以JSON格式返回
    configRegisterItemGet: setAdminApi('config/register_item_get'), //获取会员注册模型详细信息，所有数据以JSON格式返回
    configRegisterItemSave: setAdminApi('config/register_item_save'), //添加会员注册模型信息，所有数据以JSON格式返回
    configRegisterItemUpdate: setAdminApi('config/register_item_update'), //修改会员注册模型信息
    configRegisterItemDelete: setAdminApi('config/register_item_delete'), //删除会员注册模型信息
    configRegisterItemPriority: setAdminApi('config/register_item_priority'), //批量保存会员注册模型信息
    configMarkGet: setAdminApi('config/mark_get'), //获取水印设置详情
    configMarkUpdate: setAdminApi('config/mark_update'), //修改水印设置信息
    configFirewallGet: setAdminApi('config/firewall_get'), //获取网站防火墙设置详情
    configFirewallUpdate: setAdminApi('config/firewall_update'), //修改网站防火墙设置信息
    configContentChargeGet: setAdminApi('config/content_charge_get'), //获取内容佣金设置详情
    configContentChargeUpdate: setAdminApi('config/content_charge_update'), //内容佣金信息修改
    configCompanyGet: setAdminApi('site_config/company_get'), //获取机构信息设置详情deleteBatch
    configCompanyUpdate: setAdminApi('site_config/company_update'), //获取机构信息设置修改
    configAttrGet: setAdminApi('config/attr_get'), //获取其他设置详情
    configAttrUpdate: setAdminApi('config/attr_update'), //其他配置修改
    configAttrClear: setAdminApi('config/attr_clear'), //清除内存缓存

    dictionaryList: setAdminApi('dictionary/list'), //按类型获取字典列表接口
    dictionaryGet: setAdminApi('dictionary/get'), //获取字典详情信息
    dictionarySave: setAdminApi('dictionary/save'), //字典添加
    dictionaryUpdate: setAdminApi('dictionary/update'), //字典修改
    dictionaryDelete: setAdminApi('dictionary/delete'), //字典删除
    dictionaryCheckValue: setAdminApi('dictionary/check_value'), //校验字典名称与值
    dictionaryType: setAdminApi('dictionary/type'), //获取字典类型信息
    apiGet: setAdminApi('config/api_get'), //获取接口设置详情
    apiUpdate: setAdminApi('config/api_update'), //修改会员设置信息
    apiSSOGet: setAdminApi('config/sso_get'), //获取单点登录认证设置详情
    apiSSOupdate: setAdminApi('config/sso_update'), //修改会员设置信息
    apiWebserviceList: setAdminApi('webservice/list'), //接口管理列表
    apiWebserviceGet: setAdminApi('webservice/get'), //获取接口管理详细信息
    apiWebserviceSave: setAdminApi('webservice/save'), //添加接口管理详细信息
    apiWebserviceUpdate: setAdminApi('webservice/update'), //修改接口管理详细信息
    apiWebserviceDelete: setAdminApi('webservice/delete'), //删除接口管理详细信息
    apiWebserviceAuthList: setAdminApi('webservice/auth_list'), //接口用户管理列表
    apiWebserviceAuthGet: setAdminApi('webservice/auth_get'), //获取接口用户管理详细信息
    apiWebserviceAuthSave: setAdminApi('webservice/auth_save'), //添加接口用户管理详细信息
    apiWebserviceAuthUpdate: setAdminApi('webservice/auth_update'), //修改接口用户管理详细信息
    apiWebserviceAuthDelete: setAdminApi('webservice/auth_delete'), //删除接口用户管理详细信息    
    apiWebserviceRecordList: setAdminApi('webservice/record_list'), //获取接口调用记录列表信息
    apiWebserviceRecordDelete: setAdminApi('webservice/record_delete'), //删除接口调用记录详细信息
    apiRecordList: setAdminApi('apiRecord/list'), //获取API接口记录列表信息
    apiRecordDelete: setAdminApi('apiRecord/delete'), //API接口记录删除接口
    apiInfoList: setAdminApi('info/list'), //获取API管理列表信息
    apiInfoGet: setAdminApi('info/get'), //获取API管理详细信息
    apiInfoUpdate: setAdminApi('info/update'), //修改API管理详细信息
    apiInfoSave: setAdminApi('info/save'), //添加API管理详细信息
    apiInfoDelete: setAdminApi('info/delete'), //删除API管理详细信息
    apiAccountList: setAdminApi('apiAccount/list'), //API接口账户管理列表信息
    apiAccountGet: setAdminApi('apiAccount/get'), //API接口账户管理详细信息
    apiAccountSave: setAdminApi('apiAccount/save'), //API接口账户管理添加
    apiAccountValPwd: setAdminApi('apiAccount/val_pwd'), //校验独立密码
    apiAccountPwdUpdate: setAdminApi('apiAccount/pwd_update'), //修改独立密码
    channelCreatPath: setAdminApi('channel/create_path'), //获取拼音
    tplSelectContentModel: setAdminApi('tpl/select_content_model'), //模型模版
    commentList: setAdminApi('comment/list'), //获取评论管理列表信息
    commentGet: setAdminApi('comment/get'), //获取评论管理详细信息
    commentUpdate: setAdminApi('comment/update'), //修改评论信息
    commentDelete: setAdminApi('comment/delete'), //删除评论管理信息
    commentCheck: setAdminApi('comment/check'), //审核评论管理信息
    commentCancelCheck: setAdminApi('comment/cancelCheck'), //取消审核评论管理信息
    wordTagList: setAdminApi('tag/list'), //获取TAG列表信息
    wordTagGet: setAdminApi('tag/get'), //获取TAG详情
    wordTagSave: setAdminApi('tag/save'), //保存TAG信息
    wordTagUpdate: setAdminApi('tag/update'), //修改TAG信息
    wordTagDelete: setAdminApi('tag/delete'), //删除TAG信息
    wordTagCheckName: setAdminApi('tag/check_name'), //校验TAG名称是否可用
    wordSensitivityList: setAdminApi('sensitivity/list'), //获取敏感词列表信息
    wordSensitivityGet: setAdminApi('sensitivity/get'), //获取敏感词详情信息
    wordSensitivityUpdate: setAdminApi('sensitivity/update'), //修改敏感词信息
    wordSensitivitySave: setAdminApi('sensitivity/save'), //保存敏感词信息
    wordSensitivityDelete: setAdminApi('sensitivity/delete'), //删除敏感词信息
    wordKeywordList: setAdminApi('keyword/list'), //关键词管理列表
    wordKeywordGet: setAdminApi('keyword/get'), //关键词管理详情
    wordKeywordSave: setAdminApi('keyword/save'), //保存关键词
    wordKeywordUpdate: setAdminApi('keyword/update'), //修改关键词
    wordKeywordDelete: setAdminApi('keyword/delete'), //删除关键词
    wordOriginList: setAdminApi('origin/list'), //获取来源管理列表信息
    wordOriginGet: setAdminApi('origin/get'), //获取来源管理信息
    wordOriginSave: setAdminApi('origin/save'), //保存来源管理信息
    wordOriginUpdate: setAdminApi('origin/update'), //修改来源管理信息
    wordOriginDelete: setAdminApi('origin/delete'), //删除来源管理信息
    wordSearchwordsList: setAdminApi('searchwords/list'), //热词管理列表
    wordSearchwordsGet: setAdminApi('searchwords/get'), //热词管理详情
    wordSearchwordsSave: setAdminApi('searchwords/save'), //热词管理保存
    wordSearchwordsUpdate: setAdminApi('searchwords/update'), //热词管理修改
    wordSearchwordsDelete: setAdminApi('searchwords/delete'), //热词管理删除
    contentBuyUserOrderList: setAdminApi('contentBuy/user_order_list'), //获取内容购买记录列表信息
    contentBuyUserAccountList: setAdminApi('contentBuy/user_account_list'), //获取用户账户统计列表信息
    contentBuyChargeList: setAdminApi('contentBuy/charge_list'), //内容收费统计
    contentBuyCommissionStatic: setAdminApi('contentBuy/commissionStatic'), //2）平台佣金所得统计接口
    accountPayList: setAdminApi('accountPay/list'), //获取转账列表信息
    accountPayPayByWX: setAdminApi('accountPay/payByWX'), //转账
    accountPayPayByWXGet: setAdminApi('accountPay/draw_apply_get'), //详情

    accountPayDelete: setAdminApi('accountPay/delete'), //删除转账信息
    accountPayDrawApplyList: setAdminApi('accountPay/draw_apply_list'), //获取提现列表信息
    accountPayDrawApplyCheck: setAdminApi('accountPay/draw_apply_check'), //审核/退回
    accountPayDrawApplyDelete: setAdminApi('accountPay/draw_apply_delete'), //删除提现信息
    dimensioncodeCreate: setAdminApi('dimensioncode/create'), //生成二维码
    scoregroupList: setAdminApi('scoregroup/list'), //获取评分组列表信息
    scoregroupGet: setAdminApi('scoregroup/get'), //获取评分组详情信息
    scoregroupSave: setAdminApi('scoregroup/save'), //保存评分组信息
    scoregroupUpdate: setAdminApi('scoregroup/update'), //修改评分组信息
    scoregroupDelete: setAdminApi('scoregroup/delete'), //删除评分组信息
    scoreitemList: setAdminApi('scoreitem/list'), //获取评分项列表信息
    scoreitemGet: setAdminApi('scoreitem/get'), //获取评分项信息
    scoreitemSave: setAdminApi('scoreitem/save'), //保存评分项信息
    scoreitemUpdate: setAdminApi('scoreitem/update'), //修改评分项信息
    scoreitemDelete: setAdminApi('scoreitem/delete'), //删除评分项信息
    contentCycleRecycle: setAdminApi('content/cycle_recycle'), //回收内容信息
    contentCycleDelete: setAdminApi('content/cycle_delete'), //删除内容信息

    globalStatistic: setAdminApi('global/statistic'), //获取全局统计信息
    flowSourceList: setAdminApi('flow/source/list'), //获取来源、来访域名、搜索词信息
    statisticMemberList: setAdminApi('statistic/member/list'), //获取会员注册数
    flowPvList: setAdminApi('flow/pv/list'), //获取pv、ip、访客数信息,趋势分析统计

    channelCopy: setAdminApi('channel/copy'), //栏目复制    
    channelTree: setAdminApi('channel/tree'), //栏目树
    channelGet: setAdminApi('channel/get'), //栏目信息获取
    channelList: setAdminApi('channel/list'), //获取栏目信息
    channelDelete: setAdminApi('channel/delete'), //删除栏目
    channelPriority: setAdminApi('channel/priority'), //栏目排序
    channelSave: setAdminApi('channel/save'), //栏目添加
    channelUpdate: setAdminApi('channel/update'), //栏目修改
    channelCheckPath: setAdminApi('channel/v_check_path'), //验证栏目路径是否为重复
    contentGet: setAdminApi('content/get'), //获取内容
    contentSave: setAdminApi('content/save'), //发布内容接口
    contentView: setAdminApi('content/view'), //查看内容接口
    contentUpdate: setAdminApi('content/update'), //修改内容接口
    contentDelete: setAdminApi('content/delete'), //删除内容接口
    contentRecord: setAdminApi('content/record/list'), //操作记录接口
    contentMove: setAdminApi('content/move'), //移动接口
    contentCopy: setAdminApi('content/copy'), //内容复制
    contentCheck: setAdminApi('content/check'), //内容审核
    contentRecommend: setAdminApi('content/recommend'), //推荐
    contentReject: setAdminApi('content/reject'), //内容退回
    contentSubmit: setAdminApi('content/submit'), //内容提交
    contentSendToWeixin: setAdminApi('content/send_to_weixin'),
    contentSend: setAdminApi('content/send_to_topic'), //推送至专题接口
    contentStatic: setAdminApi('content/static'), //生成静态页
    contentPriority: setAdminApi('content/priority'), //保存固顶接口
    contentPush: setAdminApi('content/push'), //推送接口
    contentPigeonhole: setAdminApi('content/pigeonhole'), //归档接口
    contentUnpigeonhole: setAdminApi('content/unpigeonhole'), //出档接口
    contentRefer: setAdminApi('content/refer'), //内容引用
    topicListAll: setAdminApi('topic/by_channel'), //专题列表
    topicList: setAdminApi('topic/list'), //专题列表，分页
    topicGet: setAdminApi('topic/get'), //专题获取
    topicSave: setAdminApi('topic/save'), //专题添加
    topicDelete: setAdminApi('topic/delete'), //专题删除
    topicUpdate: setAdminApi('topic/update'), //专题更新
    topicPriority: setAdminApi('topic/priority'), //专题排序
    topicTplList: setAdminApi('topic/tpl_list'), //专题模版
    crontabList: setAdminApi('task/list'), //定时任务列表
    crontabGet: setAdminApi('task/get'), //定时任务获取详情
    crontabSave: setAdminApi('task/save'), //定时任务保存
    crontabUpdate: setAdminApi('task/update'), //定时任务修改
    crontabDelete: setAdminApi('task/delete'), //定时任务删除
    acquisitionList: setAdminApi('acquisition/list'), //采集列表
    workflowList: setAdminApi('workflow/list'), //工作流列表
    workflowGet: setAdminApi('workflow/get'), //工作流详情
    workflowSave: setAdminApi('workflow/save'), //工作流保存
    workflowUpdate: setAdminApi('workflow/update'), //工作流修改
    workflowDelete: setAdminApi('workflow/delete'), //工作流删除
    workflowPriority: setAdminApi('workflow/priority'), //工作流保存排序

    linkList: setAdminApi('friendlink/list'), //友情链接列表
    linkGet: setAdminApi('friendlink/get'), //友情链接详情
    linkSave: setAdminApi('friendlink/save'), //友情链接保存
    linkUpdate: setAdminApi('friendlink/update'), //友情链接修改
    linkDelete: setAdminApi('friendlink/delete'), //友情链接删除
    linkPriority: setAdminApi('friendlink/priority'), //友情链接修改排序
    linkTypeList: setAdminApi('friendlink/ctg_list'), //友情链接类别列表
    linkTypeGet: setAdminApi('friendlink/ctg_get'), //有情链接类别详情
    linkTypeSave: setAdminApi('friendlink/ctg_save'), //友情链接列表保存
    linkTypeUpdate: setAdminApi('friendlink/ctg_priority'), //友情链接修改
    linkTypeDelete: setAdminApi('friendlink/ctg_delete'), //友情链接删除
    adSpaceList: setAdminApi('advertising/space_list'), //广告版位列表
    adSpaceGet: setAdminApi('advertising/space_get'), //广告版位详情
    adSpaceSave: setAdminApi('advertising/space_save'), //广告版位新增
    adSpaceUpdate: setAdminApi('advertising/space_update'), //广告版位修改
    adSpaceDelete: setAdminApi('advertising/space_delete'), //广告版位删除
    adList: setAdminApi('advertising/list'), //广告列表
    adGet: setAdminApi('advertising/get'), //广告详情
    adSave: setAdminApi('advertising/save'), //广告新增
    adUpdate: setAdminApi('advertising/update'), //广告修改
    adDelete: setAdminApi('advertising/delete'), //广告删除
    fileList: setAdminApi('file/list'), //附件列表
    fileDelete: setAdminApi('file/delete'), //删除附件
    fileInvalid: setAdminApi('file/freefiles_delete'), //标志原有附件失效
    fileEffective: setAdminApi('file/flag'), //标志原有附件有效
    contentShareList: setAdminApi('content/share_list'), //共享管理列表
    contentShareAduit: setAdminApi('content/share_check'), //共享信息审核
    contentShareDelete: setAdminApi('content/share_delete'), //共享信息删除
    flowSearchWordList: setAdminApi('flow/searchword/list'), //搜索词统计
    flowPagesList: setAdminApi('flow/pages/list'), //受访页面统计
    flowAreaList: setAdminApi('flow/area/list'), //来访地区
    flowEnterpageList: setAdminApi('flow/enterpage/list'), //入口页面统计
    statisticChannelList: setAdminApi('statistic/channel/list'), //栏目访问量统计
    statisticContentList: setAdminApi('statistic/content/list'), //获取内容发布统计信息
    statisticWorkloadList: setAdminApi('statistic/workload/list'), //获取工作量统计信息
    localAll: setAdminApi('admin/local_all'), //获取所有管理员
    statisticCommentList: setAdminApi('statistic/comment/list'), //获取评论统计信息
    statisticGuestbookList: setAdminApi('statistic/guestbook/list'), //获取留言统计信息
    commentRecommend: setAdminApi('comment/recommend'), //评论推荐
    commentReply: setAdminApi('comment/reply'), //评论回复
    commentItemList: setAdminApi('comment/list_by_content'), //内容评论管理列表
    voteList: setAdminApi('vote_topic/list'), //问卷调查列表
    voteGet: setAdminApi('vote_topic/get'), //问卷调查详情
    voteSave: setAdminApi('vote_topic/save'), //问卷调查新增
    voteUpdate: setAdminApi('vote_topic/update'), //问卷调查修改
    voteDelete: setAdminApi('vote_topic/delete'), //问卷调查删除
    voteSaveContent: setAdminApi('vote_topic/priority'), //调查问卷保存内容

    guestbookList: setAdminApi('guestbook/list'), //留言列表
    guestbookSave: setAdminApi('guestbook/save'), //留言添加
    guestbookGet: setAdminApi('guestbook/get'), //留言详情
    guestbookUpdate: setAdminApi('guestbook/update'), //留言修改
    guestbookDelete: setAdminApi('guestbook/delete'), //留言删除
    guestbookCheck: setAdminApi('guestbook/check'), //留言审核/取消审核
    guestbookRecommend: setAdminApi('guestbook/recommend'), //留言推荐/取消推荐
    guestbookTypeList: setAdminApi('guestbook_ctg/list'), //留言类型列表
    guestbookTypeGet: setAdminApi('guestbook_ctg/get'), // 留言类型详情
    guestbookTypeSave: setAdminApi('guestbook_ctg/save'), //留言类型新增
    guestbookTypeUpdate: setAdminApi('guestbook_ctg/update'), //留言类型修改
    guestbookTypeDelete: setAdminApi('guestbook_ctg/delete'), //留言类型删除

    weixinGet: setAdminApi('weixin/get'), //获取公众号详情
    weixinConfig: setAdminApi('weixin/config'), //设置公众号
    weixinMenuList: setAdminApi('weixinMenu/list'), //获取自定义菜单列表信息
    weixinMenuGet: setAdminApi('weixinMenu/get'), //获取自定义菜单详情信息
    weixinMenuSave: setAdminApi('weixinMenu/save'), //添加自定义菜单信息
    weixinMenuUpdate: setAdminApi('weixinMenu/update'), //修改自定义菜单信息
    weixinMenuDelete: setAdminApi('weixinMenu/delete'), //删除自定义菜单信息
    weixinMessageList: setAdminApi('weixinMessage/list'), //获取回复列表信息
    weixinMessageGet: setAdminApi('weixinMessage/get'), //获取回复详细信息
    weixinMessageSave: setAdminApi('weixinMessage/save'), //添加回复
    weixinMessageUpdate: setAdminApi('weixinMessage/update'), //修改回复
    weixinMessageDelete: setAdminApi('weixinMessage/delete'), //删除回复
    weixinMessageDefaultGet: setAdminApi('weixinMessage/default_get'), //获取默认回复详细信息
    weixinMenuOMenu: setAdminApi('weixinMenu/o_menu'), //修改自定义菜单信息
    statList: setAdminApi('stat/list'), //获取统计信息
    statGet: setAdminApi('stat/get'), //获取统计信息
    statSave: setAdminApi('stat/save'), //保存统计信息
    statUpdate: setAdminApi('stat/update'), //修改统计信息
    statDelete: setAdminApi('stat/delete'), //删除统计信息
    ossGet: setAdminApi('oss/get'), //获取云存储oss信息
    ossSave: setAdminApi('oss/save'), //保存oss信息
    ossUpdate: setAdminApi('oss/update'), //修改oss信息
    ossDelete: setAdminApi('oss/delete'), //删除oss信息
    flowVisitorList: setAdminApi('flow/visitor/list'), //忠诚度统计
    staticIndex: setAdminApi('static/index'), //首页静态化
    staticChannel: setAdminApi('static/channel'), //栏目静态化
    staticContent: setAdminApi('static/content'), //内容静态化
    staticProgress: setAdminApi('static/progress'), //查看进度
    staticIndexRemove: setAdminApi('static/index_remove'), //8）静态化首页删除
    jobapplyList: setAdminApi('jobapply/list'), //获取职位申请列表信息
    jobapplyDelete: setAdminApi('jobapply/delete'), //28）职位申请删除接口
    jobapplyView: setAdminApi('jobapply/view'), //简历查看接口
    frameGetDB: setAdminApi('frame/getDB'), //获取数据库类型名称
    mysqlDataList: setAdminApi('mysql/data/list'), //备份数据表列表 mysql
    oracleDataList: setAdminApi('oracle/data/list'), //备份数据表列表 oracle
    sqlserverDataList: setAdminApi('sqlserver/data/list'), //备份数据表列表 sqlserver
    db2DataList: setAdminApi('db2/data/list'), //备份数据表列表 db2
    mysqlDataListfields: setAdminApi('mysql/data/listfields'), //备份数据表详情信息
    oracleDataListfields: setAdminApi('oracle/data/listfields'), //备份数据表详情信息
    sqlserverDataListfields: setAdminApi('sqlserver/data/listfields'), //备份数据表详情信息
    db2DataListfields: setAdminApi('db2/data/listfields'), //备份数据表详情信息
    mysqlDataBackup: setAdminApi('mysql/data/backup'), //备份数据
    oracleDataBackup: setAdminApi('oracle/data/backup'), //备份数据
    sqlserverDataBackup: setAdminApi('sqlserver/data/backup'), //备份数据
    db2DataBackup: setAdminApi('db2/data/backup'), //备份数据

    //数据库恢复
    mysqlDataFiles: setAdminApi('mysql/data/files'), //获取数据库文件列表信息
    oracleDataFiles: setAdminApi('oracle/data/files'), //获取数据库文件列表信息
    sqlserverDataFiles: setAdminApi('sqlserver/data/files'), //获取数据库文件列表信息
    db2DataFiles: setAdminApi('db2/data/files'), //获取数据库文件列表信息
    mysqlDataListDataBases: setAdminApi('mysql/data/listDataBases'), //获取数据库列表信息
    sqlserverDataListDataBases: setAdminApi('sqlserver/data/listDataBases'), //获取数据库列表信息
    mysqlDataRevert: setAdminApi('mysql/data/revert'), //恢复数据库
    oracleDataRevert: setAdminApi('oracle/data/revert'), //恢复数据库
    sqlserverDataRevert: setAdminApi('sqlserver/data/revert'), //恢复数据库
    db2DataRevert: setAdminApi('db2/data/revert'), //恢复数据库

    mysqlDataOrigName: setAdminApi('mysql/data/origName'), //截取原文件名
    oracleDataOrigName: setAdminApi('oracle/data/origName'), //截取原文件名
    sqlserverDataOrigName: setAdminApi('sqlserver/data/origName'), //截取原文件名
    db2DataOrigName: setAdminApi('db2/data/origName'), //截取原文件名
    mysqlDataRename: setAdminApi('mysql/data/rename'), //文件重命名
    oracleDataRename: setAdminApi('oracle/data/rename'), //文件重命名
    sqlserverDataRename: setAdminApi('sqlserver/data/rename'), //文件重命名
    db2DataRename: setAdminApi('db2/data/rename'), //文件重命名
    mysqlDataExport: setAdminApi('mysql/data/export'), //下载文件
    oracleDataExport: setAdminApi('oracle/data/export'), //下载文件
    sqlserverDataExport: setAdminApi('sqlserver/data/export'), //下载文件
    db2DataExport: setAdminApi('db2/data/export'), //下载文件
    mysqlDataDelete: setAdminApi('mysql/data/delete'), //删除文件
    oracleDataDelete: setAdminApi('oracle/data/delete'), //删除文件
    sqlserverDataDelete: setAdminApi('sqlserver/data/delete'), //删除文件
    db2DataDelete: setAdminApi('db2/data/delete'), //删除文件
    mysqlDataDefaultCatalog: setAdminApi('mysql/data/defaultCatalog'), //获取默认数据库名称
    sqlserverDataDefaultCatalog: setAdminApi('sqlserver/data/defaultCatalog'), //获取默认数据库名称
    //标签向导
    directiveList: setAdminApi('directive/list'), //获取标签向导列表信息
    directiveGet: setAdminApi('directive/get'), //获取标签向导详情信息
    directiveSave: setAdminApi('directive/save'), //添加标签向导详情信息
    directiveUpdate: setAdminApi('directive/update'), //修改标签向导详情信息
    directiveDelete: setAdminApi('directive/delete'), //删除标签向导详情信息

    collectList: setAdminApi('acquisition/list'), //采集任务列表
    collectGet: setAdminApi('acquisition/get'), //采集任务详情
    collectSave: setAdminApi('acquisition/save'), //采集任务新增
    collectUpdate: setAdminApi('acquisition/update'), //采集任务修改
    collectDelete: setAdminApi('acquisition/delete'), //采集任务删除
    collectStart: setAdminApi('acquisition/start'), //采集任务开始
    collectEnd: setAdminApi('acquisition/end'), //采集任务停止
    collectPause: setAdminApi('acquisition/pause'), //采集任务暂停
    collectCancel: setAdminApi('acquisition/cancel'), //采集任务取消
    collectHistoryLIst: setAdminApi('acquisition/history'), //采集历史列表
    collectSpeedData: setAdminApi('acquisition/progress_data'), //查看采集进度
    collectHistoryDelete: setAdminApi('acquisition/history_delete'), //采集历史删除
    departmentList: setAdminApi('department/list'), //部门列表
    departmentGet: setAdminApi('department/get'), //部门详情
    departmentSave: setAdminApi('department/save'), //部门添加
    departmentUpdate: setAdminApi('department/update'), //部门修改
    departmentDelete: setAdminApi('department/delete'), //部门删除
    departmentCheckName: setAdminApi('department/check_name'), //部门名称校验
    departmentPriority: setAdminApi('department/priority'), //部门保存排序
    departmentMemberList: setAdminApi('department/member_list'), //部门成员列表
    departmentTree: setAdminApi('department/tree'), //部门树
    getAllChannel: setAdminApi('channel/all'), //获取全站栏目数据

    customFormList: setAdminApi('custom/list'), //自定义表单列表
    customFormGet: setAdminApi('custom/get'), //自定义表单详情
    customFormSave: setAdminApi('custom/save'), //自定义表单保存
    customFormDelete: setAdminApi('/custom/delete'), //自定义表单删除
    customFormUpdate: setAdminApi('custom/update'), //自定义表单修改
    customFormPublish: setAdminApi('custom/publish'), //自定义表单详情
    customFiledList: setAdminApi('filed/list'), //自定义字段列表
    customFiledGet: setAdminApi('filed/get'), //自定义字段详情
    customFiledSave: setAdminApi('filed/save'), //自定义字段保存
    customFiledUpdate: setAdminApi('filed/update'), //自定义字段修改
    customFiledDelete: setAdminApi('filed/delete'), //自定义字段删除
    customFiledCheck: setAdminApi('filed/check_field'), //自定义字段检验
    customFiledPriority: setAdminApi('filed/priority'), //保存排序
    customFormPriority: setAdminApi('custom/priority'), //自定义表单排序
    customRecordPage: setAdminApi('record/page'), //自定义表单记录分页
    customRecordGet: setAdminApi('record/get'), //自定义表单记录详情
    customRecordDelete: setAdminApi('record/delete'), //记录删除
    customRecordCheck: setAdminApi('record/check'), //记录审核

    smsServerList: setAdminApi("sms/list"), //短信服务列表
    smsServerGET: setAdminApi("sms/get"), //短信服务详情
    smsServerUpdate: setAdminApi("sms/update"), //短信服务修改
    smsServerSave: setAdminApi("sms/save"), //短信服务保存
    smsServerDelete: setAdminApi("sms/delete"), //短信服务删除
    smsServersmsRecordList: setAdminApi("smsRecord/list"), //短信服务记录列表
    smsServersmsRecordDelete: setAdminApi("smsRecord/delete"), //短信服务记录删除

    templateList: setAdminApi('template/list'), //模板列表
    visualSave: setAdminApi('visual/save') //    

}

export default api;