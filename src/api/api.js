/**
 * @description: api接口
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-03-14 14:39:35
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-10 11:59:00
 */

const api = {
    bsaeUpload: '/api/member/upload/o_upload', //普通文件上传
    userLogin: '/api/front/user/login', //登录 
    getPerms: '/api/admin/user/getPerms', // 获取用户权限
    loginOut: '/api/member/user/logout', //退出登录
    personalGet: '/api/personal/get', //获取个人资料详情

    validateName: '/api/admin/member/check_name', //
    groupList: '/api/admin/group/list', //会员组列表接口
    groupGet: '/api/admin/group/get', //会员组详情接口
    groupSave: '/api/admin/group/save', //新增会员组接口
    groupUpdate: '/api/admin/group/update', //修改会员组接口
    groupDelete: '/api/admin/group/delete', //删除会员组接口
    groupPriority: '/api/admin/group/priority', //批量保存会员组接口
    memberList: '/api/admin/member/list', //会员分页列表接口
    memberGet: '/api/admin/member/get', //会员详情接口
    memberGetField: '/api/admin/member/getField', //会员字段接口
    memberSave: '/api/admin/member/save', //会员添加接口
    memberUpdate: '/api/admin/member/update', //会员详情修改
    memberDelete: '/api/admin/member/delete', //会员详情删除
    memberCheck: '/api/admin/member/check', //会员详情审核
    roleList: '/api/admin/role/list', //角色列表
    roleGet: '/api/admin/role/get', //角色信息
    roleSave: '/api/admin/role/save', //角色添加
    roleUpdate: '/api/admin/role/update', //角色更新
    roleDelete: '/api/admin/role/delete', //角色删除
    roleMembers: '/api/admin/role/member_list', //角色成员
    roleMembersDelete: '/api/admin/role/member_delete', //角色成员
    accountList: '/api/admin/account/list', //1）账户列表接口
    accountDelete: '/api/admin/account/delete', //2）删除账户接口
    adminGlobleList: '/api/admin/admin/global_list', //管理员列表(全站
    adminGlobleDelete: '/api/admin/admin/global_delete', //管理员删除(全站
    adminGlobleGet: '/api/admin/admin/global_get', //管理员详情(全站
    adminGlobleUpdate: '/api/admin/admin/global_update', //管理员编辑提交(全站
    adminGlobleSave: '/api/admin/admin/global_save', //管理员添加提交(全站
    adminGlocalList: '/api/admin/admin/local_list', //管理员添加提交(本站
    adminGlocalGet: '/api/admin/admin/local_get', //管理员添加详情(本站
    adminGlocalSave: '/api/admin/admin/local_save', //管理员添加提交(本站
    adminGlocalUpdate: '/api/admin/admin/local_update', //管理员修改提交(本站
    adminGlocalDelete: '/api/admin/admin/local_delete', //管理员删除提交(本站
    adminValRank: '/api/admin/admin/val_rank', //校验管理员等级信息
    contentTree: '/api/admin/content/tree', //内容栏目树接口
    contentList: '/api/admin/content/list', //nei内容列表接口
    contentPage: '/api/admin/content/page', //分页数据接口
    contentShareTree: '/api/admin/content/share_tree', //共享tree接口
    fullTextSearchChannelList: '/api/admin/channel/select', //全文检索获取栏目下拉列表
    fullTextSearchCreate: '/api/admin/lucene/create', //生成索引
    siteTree: '/api/admin/site/tree', //获取站点树结构
    siteList: '/api/admin/site/list', //站点管理列表接口  
    siteGet: '/api/admin/site/get', //获取站点管理详情
    siteSave: '/api/admin/site/save', //添加站点管理
    siteUpdate: '/api/admin/site/update', //修改站点管理
    siteDelete: '/api/admin/site/delete', //删除站点管理
    siteCheckMaster: '/api/admin/site/check_master', //验证是否为主站
    siteCheckAccessPath: '/api/admin/site/check_accessPath', //验证访问路径是否可用
    siteCheckDomain: '/api/admin/site/check_domain', //验证域名是否可用

    contentRenuseList: '/api/admin/content/reuse_list', //获取内容复用信息列表
    contentRenusePage: '/api/admin/content/reuse_page', //获取内容复用分页信息
    logList: '/api/admin/log/operating_list', //后台操作日志列表接口
    messageList: '/api/admin/message/list', //站内信列表接口
    messageGet: '/api/admin/message/get', //2  站内信详情接口
    messageRead: '/api/admin/message/read', //  阅读站内信详细信息
    messageSend: '/api/admin/message/send', //3    发送消息接口
    messageSave: '/api/admin/message/save', //4    保存草稿接口
    messageToSend: '/api/admin/message/tosend', //5    选择发送接口
    messageUpdate: '/api/admin/message/update', //6    修改消息接口
    messageForward: '/api/admin/message/forward', //7   任意消息详情
    messageReply: '/api/admin/message/reply', //8  回复消息详情
    messageTrash: '/api/admin/message/trash', //9  移除至回收站接口
    messageRevert: '/api/admin/message/revert', //10   还原消息接口
    messageEmpty: '/api/admin/message/empty', //11 清空消息接口
    memberCheckName: '/api/admin/member/check_name', //7）校验用户名接
    siteConfigGet: '/api/admin/site_config/base_get', //1）站点详情接口
    siteConfigUpdate: '/api/admin/site_config/base_update', //站点修改接口

    smsList: '/api/admin/sms/list', //sms短信服务列表
    ossList: '/api/admin/oss/list', //oss云储存列表
    tplList: '/api/admin/tpl/list', //首页模板列表
    tplModelList: '/api/admin/tpl/model_list', //所有的模版列表
    ftpList: '/api/admin/ftp/list', //FTP管理列表接口
    ftpGet: '/api/admin/ftp/get', //2）FTP管理详情接口
    ftpSave: '/api/admin/ftp/save', //3）FTP管理添加接口
    ftpUpdate: '/api/admin/ftp/update', //4）FTP管理修改接口
    ftpDelete: '/api/admin/ftp/delete', //5）FTP管理删除接口
    typeList: '/api/admin/type/list', //1  内容类型列表接口
    typeGet: '/api/admin/type/get', //1    2  内容类型详情接口
    typeSave: '/api/admin/type/save', //1      添加内容类型接口
    typeUpdate: '/api/admin/type/update', //    内容类型详情接口
    typeDelete: '/api/admin/type/delete', //    删除内容类型接口
    typeCheckId: '/api/admin/type/check_id', // 内容类型ID校验
    modelList: '/api/admin/model/list', //1    模型管理列表接口
    modelGet: '/api/admin/model/get', //    模型管理详情接口
    modelSave: '/api/admin/model/save', //3    添加模型管理接口
    modelUpdate: '/api/admin/model/update', //修改模型管理接口
    modelDelete: '/api/admin/model/delete', //删除模型管理接口
    modelPriority: '/api/admin/model/priority', //批量保存模型管理接口
    modelCheckId: '/api/admin/model/check_id', //验证模型ID是否可用
    itemList: '/api/admin/item/list', //获取模型项列表信息
    itemGet: '/api/admin/item/get', //获取模型项详细信息
    itemSave: '/api/admin/item/save', //添加模型项信息
    itemUpdate: '/api/admin/item/update', //修改模型项信息
    itemDelete: '/api/admin/item/delete', //删除模型项信息
    itemPriority: '/api/admin/item/priority', //批量保存模型项信息
    itemListSave: '/api/admin/item/list_save', //批量保存模型项信息
    itemCheckField: '/api/admin/item/check_field', //模型项字段校验接口

    configGet: '/api/admin/config/get', //获取登录设置详情   
    configSystemUpdate: '/api/admin/config/system_update', //系统设置修改接口
    configLoginGet: '/api/admin/config/login_get', //获取登录设置详情
    configLoginUpdate: '/api/admin/config/login_update', //修改登录设置信息，所有数据以JSON格式返回
    configMemberGet: '/api/admin/config/member_get', //获取会员设置详情
    configMemberUpdate: '/api/admin/config/member_update', //修改会员设置信息，所有数据以JSON格式返回
    configRegisterItemList: '/api/admin/config/register_item_list', //获取会员注册模型列表信息，所有数据以JSON格式返回
    configRegisterItemGet: '/api/admin/config/register_item_get', //获取会员注册模型详细信息，所有数据以JSON格式返回
    configRegisterItemSave: '/api/admin/config/register_item_save', //添加会员注册模型信息，所有数据以JSON格式返回
    configRegisterItemUpdate: '/api/admin/config/register_item_update', //修改会员注册模型信息
    configRegisterItemDelete: '/api/admin/config/register_item_delete', //删除会员注册模型信息
    configRegisterItemPriority: '/api/admin/config/register_item_priority', //批量保存会员注册模型信息
    configMarkGet: '/api/admin/config/mark_get', //获取水印设置详情
    configMarkUpdate: '/api/admin/config/mark_update', //修改水印设置信息
    configFirewallGet: '/api/admin/config/firewall_get', //获取网站防火墙设置详情
    configFirewallUpdate: '/api/admin/config/firewall_update', //修改网站防火墙设置信息
    configContentChargeGet: '/api/admin/config/content_charge_get', //获取内容佣金设置详情
    configContentChargeUpdate: '/api/admin/config/content_charge_update', //内容佣金信息修改
    configCompanyGet: '/api/admin/site_config/company_get', //获取机构信息设置详情deleteBatch
    configCompanyUpdate: '/api/admin/site_config/company_update', //获取机构信息设置修改
    configAttrGet: '/api/admin/config/attr_get', //获取其他设置详情
    configAttrUpdate: '/api/admin/config/attr_update', //其他配置修改
    configAttrClear: '/api/admin/config/attr_clear', //清除内存缓存

    dictionaryList: '/api/admin/dictionary/list', //按类型获取字典列表接口
    dictionaryGet: '/api/admin/dictionary/get', //获取字典详情信息
    dictionarySave: '/api/admin/dictionary/save', //字典添加
    dictionaryUpdate: '/api/admin/dictionary/update', //字典修改
    dictionaryDelete: '/api/admin/dictionary/delete', //字典删除
    dictionaryCheckValue: '/api/admin/dictionary/check_value', //校验字典名称与值
    dictionaryType: '/api/admin/dictionary/type', //获取字典类型信息
    apiGet: '/api/admin/config/api_get', //获取接口设置详情
    apiUpdate: '/api/admin/config/api_update', //修改会员设置信息
    apiSSOGet: '/api/admin/config/sso_get', //获取单点登录认证设置详情
    apiSSOupdate: '/api/admin/config/sso_update', //修改会员设置信息
    apiWebserviceList: '/api/admin/webservice/list', //接口管理列表
    apiWebserviceGet: '/api/admin/webservice/get', //获取接口管理详细信息
    apiWebserviceSave: '/api/admin/webservice/save', //添加接口管理详细信息
    apiWebserviceUpdate: '/api/admin/webservice/update', //修改接口管理详细信息
    apiWebserviceDelete: '/api/admin/webservice/delete', //删除接口管理详细信息
    apiWebserviceAuthList: '/api/admin/webservice/auth_list', //接口用户管理列表
    apiWebserviceAuthGet: '/api/admin/webservice/auth_get', //获取接口用户管理详细信息
    apiWebserviceAuthSave: '/api/admin/webservice/auth_save', //添加接口用户管理详细信息
    apiWebserviceAuthUpdate: '/api/admin/webservice/auth_update', //修改接口用户管理详细信息
    apiWebserviceAuthDelete: '/api/admin/webservice/auth_delete', //删除接口用户管理详细信息    
    apiWebserviceRecordList: '/api/admin/webservice/record_list', //获取接口调用记录列表信息
    apiWebserviceRecordDelete: '/api/admin/webservice/record_delete', //删除接口调用记录详细信息
    apiRecordList: '/api/admin/apiRecord/list', //获取API接口记录列表信息
    apiRecordDelete: '/api/admin/apiRecord/delete', //API接口记录删除接口
    apiInfoList: '/api/admin/info/list', //获取API管理列表信息
    apiInfoGet: '/api/admin/info/get', //获取API管理详细信息
    apiInfoUpdate: '/api/admin/info/update', //修改API管理详细信息
    apiInfoSave: '/api/admin/info/save', //添加API管理详细信息
    apiInfoDelete: '/api/admin/info/delete', //删除API管理详细信息
    apiAccountList: '/api/admin/apiAccount/list', //API接口账户管理列表信息
    apiAccountGet: '/api/admin/apiAccount/get', //API接口账户管理详细信息
    apiAccountSave: '/api/admin/apiAccount/save', //API接口账户管理添加
    apiAccountValPwd: '/api/admin/apiAccount/val_pwd', //校验独立密码
    apiAccountPwdUpdate: '/api/admin/apiAccount/pwd_update', //修改独立密码
    channelCreatPath: '/api/admin/channel/create_path', //获取拼音
    tplSelectContentModel: '/api/admin/tpl/select_content_model', //模型模版
    commentList: '/api/admin/comment/list', //获取评论管理列表信息
    commentGet: '/api/admin/comment/get', //获取评论管理详细信息
    commentUpdate: '/api/admin/comment/update', //修改评论信息
    commentDelete: '/api/admin/comment/delete', //删除评论管理信息
    commentCheck: '/api/admin/comment/check', //审核评论管理信息
    commentCancelCheck: '/api/admin/comment/cancelCheck', //取消审核评论管理信息
    wordTagList: '/api/admin/tag/list', //获取TAG列表信息
    wordTagGet: '/api/admin/tag/get', //获取TAG详情
    wordTagSave: '/api/admin/tag/save', //保存TAG信息
    wordTagUpdate: '/api/admin/tag/update', //修改TAG信息
    wordTagDelete: '/api/admin/tag/delete', //删除TAG信息
    wordTagCheckName: '/api/admin/tag/check_name', //校验TAG名称是否可用
    wordSensitivityList: '/api/admin/sensitivity/list', //获取敏感词列表信息
    wordSensitivityGet: '/api/admin/sensitivity/get', //获取敏感词详情信息
    wordSensitivityUpdate: '/api/admin/sensitivity/update', //修改敏感词信息
    wordSensitivitySave: '/api/admin/sensitivity/save', //保存敏感词信息
    wordSensitivityDelete: '/api/admin/sensitivity/delete', //删除敏感词信息
    wordKeywordList: '/api/admin/keyword/list', //关键词管理列表
    wordKeywordGet: '/api/admin/keyword/get', //关键词管理详情
    wordKeywordSave: '/api/admin/keyword/save', //保存关键词
    wordKeywordUpdate: '/api/admin/keyword/update', //修改关键词
    wordKeywordDelete: '/api/admin/keyword/delete', //删除关键词
    wordOriginList: '/api/admin/origin/list', //获取来源管理列表信息
    wordOriginGet: '/api/admin/origin/get', //获取来源管理信息
    wordOriginSave: '/api/admin/origin/save', //保存来源管理信息
    wordOriginUpdate: '/api/admin/origin/update', //修改来源管理信息
    wordOriginDelete: '/api/admin/origin/delete', //删除来源管理信息
    wordSearchwordsList: '/api/admin/searchwords/list', //热词管理列表
    wordSearchwordsGet: '/api/admin/searchwords/get', //热词管理详情
    wordSearchwordsSave: '/api/admin/searchwords/save', //热词管理保存
    wordSearchwordsUpdate: '/api/admin/searchwords/update', //热词管理修改
    wordSearchwordsDelete: '/api/admin/searchwords/delete', //热词管理删除
    contentBuyUserOrderList: '/api/admin/contentBuy/user_order_list', //获取内容购买记录列表信息
    contentBuyUserAccountList: '/api/admin/contentBuy/user_account_list', //获取用户账户统计列表信息
    contentBuyChargeList: '/api/admin/contentBuy/charge_list', //内容收费统计
    contentBuyCommissionStatic: '/api/admin/contentBuy/commissionStatic', //2）平台佣金所得统计接口
    accountPayList: '/api/admin/accountPay/list', //获取转账列表信息
    accountPayPayByWX: '/api/admin/accountPay/payByWX', //转账
    accountPayPayByWXGet: '/api/admin/accountPay/draw_apply_get', //详情

    accountPayDelete: '/api/admin/accountPay/delete', //删除转账信息
    accountPayDrawApplyList: '/api/admin/accountPay/draw_apply_list', //获取提现列表信息
    accountPayDrawApplyCheck: '/api/admin/accountPay/draw_apply_check', //审核/退回
    accountPayDrawApplyDelete: '/api/admin/accountPay/draw_apply_delete', //删除提现信息
    dimensioncodeCreate: '/api/admin/dimensioncode/create', //生成二维码
    scoregroupList: '/api/admin/scoregroup/list', //获取评分组列表信息
    scoregroupGet: '/api/admin/scoregroup/get', //获取评分组详情信息
    scoregroupSave: '/api/admin/scoregroup/save', //保存评分组信息
    scoregroupUpdate: '/api/admin/scoregroup/update', //修改评分组信息
    scoregroupDelete: '/api/admin/scoregroup/delete', //删除评分组信息
    scoreitemList: '/api/admin/scoreitem/list', //获取评分项列表信息
    scoreitemGet: '/api/admin/scoreitem/get', //获取评分项信息
    scoreitemSave: '/api/admin/scoreitem/save', //保存评分项信息
    scoreitemUpdate: '/api/admin/scoreitem/update', //修改评分项信息
    scoreitemDelete: '/api/admin/scoreitem/delete', //删除评分项信息
    contentCycleRecycle: '/api/admin/content/cycle_recycle', //回收内容信息
    contentCycleDelete: '/api/admin/content/cycle_delete', //删除内容信息

    globalStatistic: '/api/admin/global/statistic', //获取全局统计信息
    flowSourceList: '/api/admin/flow/source/list', //获取来源、来访域名、搜索词信息
    statisticMemberList: '/api/admin/statistic/member/list', //获取会员注册数
    flowPvList: '/api/admin/flow/pv/list', //获取pv、ip、访客数信息,趋势分析统计

    channelCopy: '/api/admin/channel/copy', //栏目复制    
    channelTree: '/api/admin/channel/tree', //栏目树
    channelGet: '/api/admin/channel/get', //栏目信息获取
    channelList: '/api/admin/channel/list', //获取栏目信息
    channelDelete: '/api/admin/channel/delete', //删除栏目
    channelPriority: '/api/admin/channel/priority', //栏目排序
    channelSave: '/api/admin/channel/save', //栏目添加
    channelUpdate: '/api/admin/channel/update', //栏目修改
    channelCheckPath: '/api/admin/channel/v_check_path', //验证栏目路径是否为重复
    contentGet: '/api/admin/content/get', //获取内容
    contentSave: '/api/admin/content/save', //发布内容接口
    contentView: '/api/admin/content/view', //查看内容接口
    contentUpdate: '/api/admin/content/update', //修改内容接口
    contentDelete: '/api/admin/content/delete', //删除内容接口
    contentRecord: '/api/admin/content/record/list', //操作记录接口
    contentMove: '/api/admin/content/move', //移动接口
    contentCopy: '/api/admin/content/copy', //内容复制
    contentCheck: '/api/admin/content/check', //内容审核
    contentRecommend: '/api/admin/content/recommend', //推荐
    contentReject: '/api/admin/content/reject', //内容退回
    contentSubmit: '/api/admin/content/submit', //内容提交
    contentSendToWeixin: '/api/admin/content/send_to_weixin',
    contentSend: '/api/admin/content/send_to_topic', //推送至专题接口
    contentStatic: '/api/admin/content/static', //生成静态页
    contentPriority: '/api/admin/content/priority', //保存固顶接口
    contentPush: '/api/admin/content/push', //推送接口
    contentPigeonhole: '/api/admin/content/pigeonhole', //归档接口
    contentUnpigeonhole: '/api/admin/content/unpigeonhole', //出档接口
    contentRefer: '/api/admin/content/refer', //内容引用
    topicListAll: '/api/admin/topic/by_channel', //专题列表
    topicList: '/api/admin/topic/list', //专题列表，分页
    topicGet: '/api/admin/topic/get', //专题获取
    topicSave: '/api/admin/topic/save', //专题添加
    topicDelete: '/api/admin/topic/delete', //专题删除
    topicUpdate: '/api/admin/topic/update', //专题更新
    topicPriority: '/api/admin/topic/priority', //专题排序
    topicTplList: '/api/admin/topic/tpl_list', //专题模版
    crontabList: '/api/admin/task/list', //定时任务列表
    crontabGet: '/api/admin/task/get', //定时任务获取详情
    crontabSave: '/api/admin/task/save', //定时任务保存
    crontabUpdate: '/api/admin/task/update', //定时任务修改
    crontabDelete: '/api/admin/task/delete', //定时任务删除
    acquisitionList: '/api/admin/acquisition/list', //采集列表
    workflowList: '/api/admin/workflow/list', //工作流列表
    workflowGet: '/api/admin/workflow/get', //工作流详情
    workflowSave: '/api/admin/workflow/save', //工作流保存
    workflowUpdate: '/api/admin/workflow/update', //工作流修改
    workflowDelete: '/api/admin/workflow/delete', //工作流删除
    workflowPriority: '/api/admin/workflow/priority', //工作流保存排序

    linkList: '/api/admin/friendlink/list', //友情链接列表
    linkGet: '/api/admin/friendlink/get', //友情链接详情
    linkSave: '/api/admin/friendlink/save', //友情链接保存
    linkUpdate: '/api/admin/friendlink/update', //友情链接修改
    linkDelete: '/api/admin/friendlink/delete', //友情链接删除
    linkPriority: '/api/admin/friendlink/priority', //友情链接修改排序
    linkTypeList: '/api/admin/friendlink/ctg_list', //友情链接类别列表
    linkTypeGet: '/api/admin/friendlink/ctg_get', //有情链接类别详情
    linkTypeSave: '/api/admin/friendlink/ctg_save', //友情链接列表保存
    linkTypeUpdate: '/api/admin/friendlink/ctg_priority', //友情链接修改
    linkTypeDelete: '/api/admin/friendlink/ctg_delete', //友情链接删除
    adSpaceList: '/api/admin/advertising/space_list', //广告版位列表
    adSpaceGet: '/api/admin/advertising/space_get', //广告版位详情
    adSpaceSave: '/api/admin/advertising/space_save', //广告版位新增
    adSpaceUpdate: '/api/admin/advertising/space_update', //广告版位修改
    adSpaceDelete: '/api/admin/advertising/space_delete', //广告版位删除
    adList: '/api/admin/advertising/list', //广告列表
    adGet: '/api/admin/advertising/get', //广告详情
    adSave: '/api/admin/advertising/save', //广告新增
    adUpdate: '/api/admin/advertising/update', //广告修改
    adDelete: '/api/admin/advertising/delete', //广告删除
    fileList: '/api/admin/file/list', //附件列表
    fileDelete: '/api/admin/file/delete', //删除附件
    fileInvalid: '/api/admin/file/freefiles_delete', //标志原有附件失效
    fileEffective: '/api/admin/file/flag', //标志原有附件有效
    contentShareList: '/api/admin/content/share_list', //共享管理列表
    contentShareAduit: '/api/admin/content/share_check', //共享信息审核
    contentShareDelete: '/api/admin/content/share_delete', //共享信息删除
    flowSearchWordList: '/api/admin/flow/searchword/list', //搜索词统计
    flowPagesList: '/api/admin/flow/pages/list', //受访页面统计
    flowAreaList: '/api/admin/flow/area/list', //来访地区
    flowEnterpageList: '/api/admin/flow/enterpage/list', //入口页面统计
    statisticChannelList: '/api/admin/statistic/channel/list', //栏目访问量统计
    statisticContentList: '/api/admin/statistic/content/list', //获取内容发布统计信息
    statisticWorkloadList: '/api/admin/statistic/workload/list', //获取工作量统计信息
    localAll: '/api/admin/admin/local_all', //获取所有管理员
    statisticCommentList: '/api/admin/statistic/comment/list', //获取评论统计信息
    statisticGuestbookList: '/api/admin/statistic/guestbook/list', //获取留言统计信息
    commentRecommend: '/api/admin/comment/recommend', //评论推荐
    commentReply: '/api/admin/comment/reply', //评论回复
    commentItemList: '/api/admin/comment/list_by_content', //内容评论管理列表
    voteList: '/api/admin/vote_topic/list', //问卷调查列表
    voteGet: '/api/admin/vote_topic/get', //问卷调查详情
    voteSave: '/api/admin/vote_topic/save', //问卷调查新增
    voteUpdate: '/api/admin/vote_topic/update', //问卷调查修改
    voteDelete: '/api/admin/vote_topic/delete', //问卷调查删除
    voteSaveContent: '/api/admin/vote_topic/priority', //调查问卷保存内容

    guestbookList: '/api/admin/guestbook/list', //留言列表
    guestbookSave: '/api/admin/guestbook/save', //留言添加
    guestbookGet: '/api/admin/guestbook/get', //留言详情
    guestbookUpdate: '/api/admin/guestbook/update', //留言修改
    guestbookDelete: '/api/admin/guestbook/delete', //留言删除
    guestbookCheck: '/api/admin/guestbook/check', //留言审核/取消审核
    guestbookRecommend: '/api/admin/guestbook/recommend', //留言推荐/取消推荐
    guestbookTypeList: '/api/admin/guestbook_ctg/list', //留言类型列表
    guestbookTypeGet: '/api/admin/guestbook_ctg/get', // 留言类型详情
    guestbookTypeSave: '/api/admin/guestbook_ctg/save', //留言类型新增
    guestbookTypeUpdate: '/api/admin/guestbook_ctg/update', //留言类型修改
    guestbookTypeDelete: '/api/admin/guestbook_ctg/delete', //留言类型删除

    weixinGet: '/api/admin/weixin/get', //获取公众号详情
    weixinConfig: '/api/admin/weixin/config', //设置公众号
    weixinMenuList: '/api/admin/weixinMenu/list', //获取自定义菜单列表信息
    weixinMenuGet: '/api/admin/weixinMenu/get', //获取自定义菜单详情信息
    weixinMenuSave: '/api/admin/weixinMenu/save', //添加自定义菜单信息
    weixinMenuUpdate: '/api/admin/weixinMenu/update', //修改自定义菜单信息
    weixinMenuDelete: '/api/admin/weixinMenu/delete', //删除自定义菜单信息
    weixinMessageList: '/api/admin/weixinMessage/list', //获取回复列表信息
    weixinMessageGet: '/api/admin/weixinMessage/get', //获取回复详细信息
    weixinMessageSave: '/api/admin/weixinMessage/save', //添加回复
    weixinMessageUpdate: '/api/admin/weixinMessage/update', //修改回复
    weixinMessageDelete: '/api/admin/weixinMessage/delete', //删除回复
    weixinMessageDefaultGet: '/api/admin/weixinMessage/default_get', //获取默认回复详细信息
    weixinMenuOMenu: '/api/admin/weixinMenu/o_menu', //修改自定义菜单信息
    statList: '/api/admin/stat/list', //获取统计信息
    statGet: '/api/admin/stat/get', //获取统计信息
    statSave: '/api/admin/stat/save', //保存统计信息
    statUpdate: '/api/admin/stat/update', //修改统计信息
    statDelete: '/api/admin/stat/delete', //删除统计信息
    ossGet: '/api/admin/oss/get', //获取云存储oss信息
    ossSave: '/api/admin/oss/save', //保存oss信息
    ossUpdate: '/api/admin/oss/update', //修改oss信息
    ossDelete: '/api/admin/oss/delete', //删除oss信息
    flowVisitorList: '/api/admin/flow/visitor/list', //忠诚度统计
    staticIndex: '/api/admin/static/index', //首页静态化
    staticChannel: '/api/admin/static/channel', //栏目静态化
    staticContent: '/api/admin/static/content', //内容静态化
    staticProgress: '/api/admin/static/progress', //查看进度
    staticIndexRemove: '/api/admin/static/index_remove', //8）静态化首页删除
    jobapplyList: '/api/admin/jobapply/list', //获取职位申请列表信息
    jobapplyDelete: '/api/admin/jobapply/delete', //28）职位申请删除接口
    jobapplyView: '/api/admin/jobapply/view', //简历查看接口
    frameGetDB: '/api/admin/frame/getDB', //获取数据库类型名称
    mysqlDataList: '/api/admin/mysql/data/list', //备份数据表列表 mysql
    oracleDataList: '/api/admin/oracle/data/list', //备份数据表列表 oracle
    sqlserverDataList: '/api/admin/sqlserver/data/list', //备份数据表列表 sqlserver
    db2DataList: '/api/admin/db2/data/list', //备份数据表列表 db2
    mysqlDataListfields: '/api/admin/mysql/data/listfields', //备份数据表详情信息
    oracleDataListfields: '/api/admin/oracle/data/listfields', //备份数据表详情信息
    sqlserverDataListfields: '/api/admin/sqlserver/data/listfields', //备份数据表详情信息
    db2DataListfields: '/api/admin/db2/data/listfields', //备份数据表详情信息
    mysqlDataBackup: '/api/admin/mysql/data/backup', //备份数据
    oracleDataBackup: '/api/admin/oracle/data/backup', //备份数据
    sqlserverDataBackup: '/api/admin/sqlserver/data/backup', //备份数据
    db2DataBackup: '/api/admin/db2/data/backup', //备份数据

    //数据库恢复
    mysqlDataFiles: '/api/admin/mysql/data/files', //获取数据库文件列表信息
    oracleDataFiles: '/api/admin/oracle/data/files', //获取数据库文件列表信息
    sqlserverDataFiles: '/api/admin/sqlserver/data/files', //获取数据库文件列表信息
    db2DataFiles: '/api/admin/db2/data/files', //获取数据库文件列表信息
    mysqlDataListDataBases: '/api/admin/mysql/data/listDataBases', //获取数据库列表信息
    sqlserverDataListDataBases: '/api/admin/sqlserver/data/listDataBases', //获取数据库列表信息
    mysqlDataRevert: '/api/admin/mysql/data/revert', //恢复数据库
    oracleDataRevert: '/api/admin/oracle/data/revert', //恢复数据库
    sqlserverDataRevert: '/api/admin/sqlserver/data/revert', //恢复数据库
    db2DataRevert: '/api/admin/db2/data/revert', //恢复数据库

    mysqlDataOrigName: '/api/admin/mysql/data/origName', //截取原文件名
    oracleDataOrigName: '/api/admin/oracle/data/origName', //截取原文件名
    sqlserverDataOrigName: '/api/admin/sqlserver/data/origName', //截取原文件名
    db2DataOrigName: '/api/admin/db2/data/origName', //截取原文件名
    mysqlDataRename: '/api/admin/mysql/data/rename', //文件重命名
    oracleDataRename: '/api/admin/oracle/data/rename', //文件重命名
    sqlserverDataRename: '/api/admin/sqlserver/data/rename', //文件重命名
    db2DataRename: '/api/admin/db2/data/rename', //文件重命名
    mysqlDataExport: '/api/admin/mysql/data/export', //下载文件
    oracleDataExport: '/api/admin/oracle/data/export', //下载文件
    sqlserverDataExport: '/api/admin/sqlserver/data/export', //下载文件
    db2DataExport: '/api/admin/db2/data/export', //下载文件
    mysqlDataDelete: '/api/admin/mysql/data/delete', //删除文件
    oracleDataDelete: '/api/admin/oracle/data/delete', //删除文件
    sqlserverDataDelete: '/api/admin/sqlserver/data/delete', //删除文件
    db2DataDelete: '/api/admin/db2/data/delete', //删除文件
    mysqlDataDefaultCatalog: '/api/admin/mysql/data/defaultCatalog', //获取默认数据库名称
    sqlserverDataDefaultCatalog: '/api/admin/sqlserver/data/defaultCatalog', //获取默认数据库名称
    //标签向导
    directiveList: '/api/admin/directive/list', //获取标签向导列表信息
    directiveGet: '/api/admin/directive/get', //获取标签向导详情信息
    directiveSave: '/api/admin/directive/save', //添加标签向导详情信息
    directiveUpdate: '/api/admin/directive/update', //修改标签向导详情信息
    directiveDelete: '/api/admin/directive/delete', //删除标签向导详情信息

    collectList: '/api/admin/acquisition/list', //采集任务列表
    collectGet: '/api/admin/acquisition/get', //采集任务详情
    collectSave: '/api/admin/acquisition/save', //采集任务新增
    collectUpdate: '/api/admin/acquisition/update', //采集任务修改
    collectDelete: '/api/admin/acquisition/delete', //采集任务删除
    collectStart: '/api/admin/acquisition/start', //采集任务开始
    collectEnd: '/api/admin/acquisition/end', //采集任务停止
    collectPause: '/api/admin/acquisition/pause', //采集任务暂停
    collectCancel: '/api/admin/acquisition/cancel', //采集任务取消
    collectHistoryLIst: '/api/admin/acquisition/history', //采集历史列表
    collectSpeedData: '/api/admin/acquisition/progress_data', //查看采集进度
    collectHistoryDelete: '/api/admin/acquisition/history_delete', //采集历史删除
    departmentList: '/api/admin/department/list', //部门列表
    departmentGet: '/api/admin/department/get', //部门详情
    departmentSave: '/api/admin/department/save', //部门添加
    departmentUpdate: '/api/admin/department/update', //部门修改
    departmentDelete: '/api/admin/department/delete', //部门删除
    departmentCheckName: '/api/admin/department/check_name', //部门名称校验
    departmentPriority: '/api/admin/department/priority', //部门保存排序
    departmentMemberList: '/api/admin/department/member_list', //部门成员列表
    departmentTree: '/api/admin/department/tree', //部门树
    getAllChannel: '/api/admin/channel/all', //获取全站栏目数据

    customFormList: '/api/admin/custom/list', //自定义表单列表
    customFormGet: '/api/admin/custom/get', //自定义表单详情
    customFormSave: '/api/admin/custom/save', //自定义表单保存
    customFormDelete: '/api/admin/custom/delete', //自定义表单删除
    customFormUpdate: '/api/admin/custom/update', //自定义表单修改
    customFormPublish: '/api/admin/custom/publish', //自定义表单详情
    customFiledList: '/api/admin/filed/list', //自定义字段列表
    customFiledGet: '/api/admin/filed/get', //自定义字段详情
    customFiledSave: '/api/admin/filed/save', //自定义字段保存
    customFiledUpdate: '/api/admin/filed/update', //自定义字段修改
    customFiledDelete: '/api/admin/filed/delete', //自定义字段删除
    customFiledCheck: '/api/admin/filed/check_field', //自定义字段检验
    customFiledPriority: '/api/admin/filed/priority', //保存排序
    customFormPriority: '/api/admin/custom/priority', //自定义表单排序
    customRecordPage: '/api/admin/record/page', //自定义表单记录分页
    customRecordGet: '/api/admin/record/get', //自定义表单记录详情
    customRecordDelete: '/api/admin/record/delete', //记录删除
    customRecordCheck: '/api/admin/record/check', //记录审核

    smsServerList: '/api/admin/sms/list', //短信服务列表
    smsServerGET: '/api/admin/sms/get', //短信服务详情
    smsServerUpdate: '/api/admin/sms/update', //短信服务修改
    smsServerSave: '/api/admin/sms/save', //短信服务保存
    smsServerDelete: '/api/admin/sms/delete', //短信服务删除
    smsServersmsRecordList: '/api/admin/smsRecord/list', //短信服务记录列表
    smsServersmsRecordDelete: '/api/admin/smsRecord/delete', //短信服务记录删除

    templateList: '/api/admin/template/list', //模板列表
    visualSave: '/api/admin/visual/save', //

    getResourceTree: '/api/admin/resource/tree',
    getResourceList: '/api/admin/resource/list', //资源信息获取
    getTemplateList: '/api/admin/template/list',
    getResourceInfo: '/api/admin/resource/get', //资源详细
    getTemplateInfo: '/api/admin/template/get',
    deleteResourceList: '/api/admin/resource/delete', //批量删除资源
    deleteTemplateList: '/api/admin/template/delete',
    creatResourceFile: 'api/admin/resource/dir_save', //新建文件夹
    creatTemplateFile: 'api/admin/template/dir_save',
    reName: '/api/admin/resource/rename', //重命名
    templateReName: '/api/admin/template/rename',
    updateResourceInfo: '/api/admin/template/update', //修改模版
    addResourceInfo: '/api/admin/resource/save',
    addTemplateInfo: '/api/admin/template/save',
    getTemplateTree: '/api/admin/template/tree',
    getSolutions: '/api/admin/template/getSolutions', //获取方案
    setSolutions: '/api/admin/template/solutionupdate',

}

export default api;