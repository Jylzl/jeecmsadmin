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
    groupList: '/api/admingroup/list', //会员组列表接口
    groupGet: '/api/admingroup/get', //会员组详情接口
    groupSave: '/api/admingroup/save', //新增会员组接口
    groupUpdate: '/api/admingroup/update', //修改会员组接口
    groupDelete: '/api/admingroup/delete', //删除会员组接口
    groupPriority: '/api/admingroup/priority', //批量保存会员组接口
    memberList: '/api/adminmember/list', //会员分页列表接口
    memberGet: '/api/adminmember/get', //会员详情接口
    memberGetField: '/api/adminmember/getField', //会员字段接口
    memberSave: '/api/adminmember/save', //会员添加接口
    memberUpdate: '/api/adminmember/update', //会员详情修改
    memberDelete: '/api/adminmember/delete', //会员详情删除
    memberCheck: '/api/adminmember/check', //会员详情审核
    roleList: '/api/adminrole/list', //角色列表
    roleGet: '/api/adminrole/get', //角色信息
    roleSave: '/api/adminrole/save', //角色添加
    roleUpdate: '/api/adminrole/update', //角色更新
    roleDelete: '/api/adminrole/delete', //角色删除
    roleMembers: '/api/adminrole/member_list', //角色成员
    roleMembersDelete: '/api/adminrole/member_delete', //角色成员
    accountList: '/api/adminaccount/list', //1）账户列表接口
    accountDelete: '/api/adminaccount/delete', //2）删除账户接口
    adminGlobleList: '/api/adminadmin/global_list', //管理员列表(全站
    adminGlobleDelete: '/api/adminadmin/global_delete', //管理员删除(全站
    adminGlobleGet: '/api/adminadmin/global_get', //管理员详情(全站
    adminGlobleUpdate: '/api/adminadmin/global_update', //管理员编辑提交(全站
    adminGlobleSave: '/api/adminadmin/global_save', //管理员添加提交(全站
    adminGlocalList: '/api/adminadmin/local_list', //管理员添加提交(本站
    adminGlocalGet: '/api/adminadmin/local_get', //管理员添加详情(本站
    adminGlocalSave: '/api/adminadmin/local_save', //管理员添加提交(本站
    adminGlocalUpdate: '/api/adminadmin/local_update', //管理员修改提交(本站
    adminGlocalDelete: '/api/adminadmin/local_delete', //管理员删除提交(本站
    adminValRank: '/api/adminadmin/val_rank', //校验管理员等级信息
    contentTree: '/api/admincontent/tree', //内容栏目树接口
    contentList: '/api/admincontent/list', //nei内容列表接口
    contentPage: '/api/admincontent/page', //分页数据接口
    contentShareTree: '/api/admincontent/share_tree', //共享tree接口
    fullTextSearchChannelList: '/api/adminchannel/select', //全文检索获取栏目下拉列表
    fullTextSearchCreate: '/api/adminlucene/create', //生成索引
    siteTree: '/api/adminsite/tree', //获取站点树结构
    siteList: '/api/adminsite/list', //站点管理列表接口  
    siteGet: '/api/adminsite/get', //获取站点管理详情
    siteSave: '/api/adminsite/save', //添加站点管理
    siteUpdate: '/api/adminsite/update', //修改站点管理
    siteDelete: '/api/adminsite/delete', //删除站点管理
    siteCheckMaster: '/api/adminsite/check_master', //验证是否为主站
    siteCheckAccessPath: '/api/adminsite/check_accessPath', //验证访问路径是否可用
    siteCheckDomain: '/api/adminsite/check_domain', //验证域名是否可用

    contentRenuseList: '/api/admincontent/reuse_list', //获取内容复用信息列表
    contentRenusePage: '/api/admincontent/reuse_page', //获取内容复用分页信息
    logList: '/api/adminlog/operating_list', //后台操作日志列表接口
    messageList: '/api/adminmessage/list', //站内信列表接口
    messageGet: '/api/adminmessage/get', //2  站内信详情接口
    messageRead: '/api/adminmessage/read', //  阅读站内信详细信息
    messageSend: '/api/adminmessage/send', //3    发送消息接口
    messageSave: '/api/adminmessage/save', //4    保存草稿接口
    messageToSend: '/api/adminmessage/tosend', //5    选择发送接口
    messageUpdate: '/api/adminmessage/update', //6    修改消息接口
    messageForward: '/api/adminmessage/forward', //7   任意消息详情
    messageReply: '/api/adminmessage/reply', //8  回复消息详情
    messageTrash: '/api/adminmessage/trash', //9  移除至回收站接口
    messageRevert: '/api/adminmessage/revert', //10   还原消息接口
    messageEmpty: '/api/adminmessage/empty', //11 清空消息接口
    memberCheckName: '/api/adminmember/check_name', //7）校验用户名接
    siteConfigGet: '/api/adminsite_config/base_get', //1）站点详情接口
    siteConfigUpdate: '/api/adminsite_config/base_update', //站点修改接口

    smsList: '/api/adminsms/list', //sms短信服务列表
    ossList: '/api/adminoss/list', //oss云储存列表
    tplList: '/api/admintpl/list', //首页模板列表
    tplModelList: '/api/admintpl/model_list', //所有的模版列表
    ftpList: '/api/adminftp/list', //FTP管理列表接口
    ftpGet: '/api/adminftp/get', //2）FTP管理详情接口
    ftpSave: '/api/adminftp/save', //3）FTP管理添加接口
    ftpUpdate: '/api/adminftp/update', //4）FTP管理修改接口
    ftpDelete: '/api/adminftp/delete', //5）FTP管理删除接口
    typeList: '/api/admintype/list', //1  内容类型列表接口
    typeGet: '/api/admintype/get', //1    2  内容类型详情接口
    typeSave: '/api/admintype/save', //1      添加内容类型接口
    typeUpdate: '/api/admintype/update', //    内容类型详情接口
    typeDelete: '/api/admintype/delete', //    删除内容类型接口
    typeCheckId: '/api/admintype/check_id', // 内容类型ID校验
    modelList: '/api/adminmodel/list', //1    模型管理列表接口
    modelGet: '/api/adminmodel/get', //    模型管理详情接口
    modelSave: '/api/adminmodel/save', //3    添加模型管理接口
    modelUpdate: '/api/adminmodel/update', //修改模型管理接口
    modelDelete: '/api/adminmodel/delete', //删除模型管理接口
    modelPriority: '/api/adminmodel/priority', //批量保存模型管理接口
    modelCheckId: '/api/adminmodel/check_id', //验证模型ID是否可用
    itemList: '/api/adminitem/list', //获取模型项列表信息
    itemGet: '/api/adminitem/get', //获取模型项详细信息
    itemSave: '/api/adminitem/save', //添加模型项信息
    itemUpdate: '/api/adminitem/update', //修改模型项信息
    itemDelete: '/api/adminitem/delete', //删除模型项信息
    itemPriority: '/api/adminitem/priority', //批量保存模型项信息
    itemListSave: '/api/adminitem/list_save', //批量保存模型项信息
    itemCheckField: '/api/adminitem/check_field', //模型项字段校验接口

    configGet: '/api/adminconfig/get', //获取登录设置详情   
    configSystemUpdate: '/api/adminconfig/system_update', //系统设置修改接口
    configLoginGet: '/api/adminconfig/login_get', //获取登录设置详情
    configLoginUpdate: '/api/adminconfig/login_update', //修改登录设置信息，所有数据以JSON格式返回
    configMemberGet: '/api/adminconfig/member_get', //获取会员设置详情
    configMemberUpdate: '/api/adminconfig/member_update', //修改会员设置信息，所有数据以JSON格式返回
    configRegisterItemList: '/api/adminconfig/register_item_list', //获取会员注册模型列表信息，所有数据以JSON格式返回
    configRegisterItemGet: '/api/adminconfig/register_item_get', //获取会员注册模型详细信息，所有数据以JSON格式返回
    configRegisterItemSave: '/api/adminconfig/register_item_save', //添加会员注册模型信息，所有数据以JSON格式返回
    configRegisterItemUpdate: '/api/adminconfig/register_item_update', //修改会员注册模型信息
    configRegisterItemDelete: '/api/adminconfig/register_item_delete', //删除会员注册模型信息
    configRegisterItemPriority: '/api/adminconfig/register_item_priority', //批量保存会员注册模型信息
    configMarkGet: '/api/adminconfig/mark_get', //获取水印设置详情
    configMarkUpdate: '/api/adminconfig/mark_update', //修改水印设置信息
    configFirewallGet: '/api/adminconfig/firewall_get', //获取网站防火墙设置详情
    configFirewallUpdate: '/api/adminconfig/firewall_update', //修改网站防火墙设置信息
    configContentChargeGet: '/api/adminconfig/content_charge_get', //获取内容佣金设置详情
    configContentChargeUpdate: '/api/adminconfig/content_charge_update', //内容佣金信息修改
    configCompanyGet: '/api/adminsite_config/company_get', //获取机构信息设置详情deleteBatch
    configCompanyUpdate: '/api/adminsite_config/company_update', //获取机构信息设置修改
    configAttrGet: '/api/adminconfig/attr_get', //获取其他设置详情
    configAttrUpdate: '/api/adminconfig/attr_update', //其他配置修改
    configAttrClear: '/api/adminconfig/attr_clear', //清除内存缓存

    dictionaryList: '/api/admindictionary/list', //按类型获取字典列表接口
    dictionaryGet: '/api/admindictionary/get', //获取字典详情信息
    dictionarySave: '/api/admindictionary/save', //字典添加
    dictionaryUpdate: '/api/admindictionary/update', //字典修改
    dictionaryDelete: '/api/admindictionary/delete', //字典删除
    dictionaryCheckValue: '/api/admindictionary/check_value', //校验字典名称与值
    dictionaryType: '/api/admindictionary/type', //获取字典类型信息
    apiGet: '/api/adminconfig/api_get', //获取接口设置详情
    apiUpdate: '/api/adminconfig/api_update', //修改会员设置信息
    apiSSOGet: '/api/adminconfig/sso_get', //获取单点登录认证设置详情
    apiSSOupdate: '/api/adminconfig/sso_update', //修改会员设置信息
    apiWebserviceList: '/api/adminwebservice/list', //接口管理列表
    apiWebserviceGet: '/api/adminwebservice/get', //获取接口管理详细信息
    apiWebserviceSave: '/api/adminwebservice/save', //添加接口管理详细信息
    apiWebserviceUpdate: '/api/adminwebservice/update', //修改接口管理详细信息
    apiWebserviceDelete: '/api/adminwebservice/delete', //删除接口管理详细信息
    apiWebserviceAuthList: '/api/adminwebservice/auth_list', //接口用户管理列表
    apiWebserviceAuthGet: '/api/adminwebservice/auth_get', //获取接口用户管理详细信息
    apiWebserviceAuthSave: '/api/adminwebservice/auth_save', //添加接口用户管理详细信息
    apiWebserviceAuthUpdate: '/api/adminwebservice/auth_update', //修改接口用户管理详细信息
    apiWebserviceAuthDelete: '/api/adminwebservice/auth_delete', //删除接口用户管理详细信息    
    apiWebserviceRecordList: '/api/adminwebservice/record_list', //获取接口调用记录列表信息
    apiWebserviceRecordDelete: '/api/adminwebservice/record_delete', //删除接口调用记录详细信息
    apiRecordList: '/api/adminapiRecord/list', //获取API接口记录列表信息
    apiRecordDelete: '/api/adminapiRecord/delete', //API接口记录删除接口
    apiInfoList: '/api/admininfo/list', //获取API管理列表信息
    apiInfoGet: '/api/admininfo/get', //获取API管理详细信息
    apiInfoUpdate: '/api/admininfo/update', //修改API管理详细信息
    apiInfoSave: '/api/admininfo/save', //添加API管理详细信息
    apiInfoDelete: '/api/admininfo/delete', //删除API管理详细信息
    apiAccountList: '/api/adminapiAccount/list', //API接口账户管理列表信息
    apiAccountGet: '/api/adminapiAccount/get', //API接口账户管理详细信息
    apiAccountSave: '/api/adminapiAccount/save', //API接口账户管理添加
    apiAccountValPwd: '/api/adminapiAccount/val_pwd', //校验独立密码
    apiAccountPwdUpdate: '/api/adminapiAccount/pwd_update', //修改独立密码
    channelCreatPath: '/api/adminchannel/create_path', //获取拼音
    tplSelectContentModel: '/api/admintpl/select_content_model', //模型模版
    commentList: '/api/admincomment/list', //获取评论管理列表信息
    commentGet: '/api/admincomment/get', //获取评论管理详细信息
    commentUpdate: '/api/admincomment/update', //修改评论信息
    commentDelete: '/api/admincomment/delete', //删除评论管理信息
    commentCheck: '/api/admincomment/check', //审核评论管理信息
    commentCancelCheck: '/api/admincomment/cancelCheck', //取消审核评论管理信息
    wordTagList: '/api/admintag/list', //获取TAG列表信息
    wordTagGet: '/api/admintag/get', //获取TAG详情
    wordTagSave: '/api/admintag/save', //保存TAG信息
    wordTagUpdate: '/api/admintag/update', //修改TAG信息
    wordTagDelete: '/api/admintag/delete', //删除TAG信息
    wordTagCheckName: '/api/admintag/check_name', //校验TAG名称是否可用
    wordSensitivityList: '/api/adminsensitivity/list', //获取敏感词列表信息
    wordSensitivityGet: '/api/adminsensitivity/get', //获取敏感词详情信息
    wordSensitivityUpdate: '/api/adminsensitivity/update', //修改敏感词信息
    wordSensitivitySave: '/api/adminsensitivity/save', //保存敏感词信息
    wordSensitivityDelete: '/api/adminsensitivity/delete', //删除敏感词信息
    wordKeywordList: '/api/adminkeyword/list', //关键词管理列表
    wordKeywordGet: '/api/adminkeyword/get', //关键词管理详情
    wordKeywordSave: '/api/adminkeyword/save', //保存关键词
    wordKeywordUpdate: '/api/adminkeyword/update', //修改关键词
    wordKeywordDelete: '/api/adminkeyword/delete', //删除关键词
    wordOriginList: '/api/adminorigin/list', //获取来源管理列表信息
    wordOriginGet: '/api/adminorigin/get', //获取来源管理信息
    wordOriginSave: '/api/adminorigin/save', //保存来源管理信息
    wordOriginUpdate: '/api/adminorigin/update', //修改来源管理信息
    wordOriginDelete: '/api/adminorigin/delete', //删除来源管理信息
    wordSearchwordsList: '/api/adminsearchwords/list', //热词管理列表
    wordSearchwordsGet: '/api/adminsearchwords/get', //热词管理详情
    wordSearchwordsSave: '/api/adminsearchwords/save', //热词管理保存
    wordSearchwordsUpdate: '/api/adminsearchwords/update', //热词管理修改
    wordSearchwordsDelete: '/api/adminsearchwords/delete', //热词管理删除
    contentBuyUserOrderList: '/api/admincontentBuy/user_order_list', //获取内容购买记录列表信息
    contentBuyUserAccountList: '/api/admincontentBuy/user_account_list', //获取用户账户统计列表信息
    contentBuyChargeList: '/api/admincontentBuy/charge_list', //内容收费统计
    contentBuyCommissionStatic: '/api/admincontentBuy/commissionStatic', //2）平台佣金所得统计接口
    accountPayList: '/api/adminaccountPay/list', //获取转账列表信息
    accountPayPayByWX: '/api/adminaccountPay/payByWX', //转账
    accountPayPayByWXGet: '/api/adminaccountPay/draw_apply_get', //详情

    accountPayDelete: '/api/adminaccountPay/delete', //删除转账信息
    accountPayDrawApplyList: '/api/adminaccountPay/draw_apply_list', //获取提现列表信息
    accountPayDrawApplyCheck: '/api/adminaccountPay/draw_apply_check', //审核/退回
    accountPayDrawApplyDelete: '/api/adminaccountPay/draw_apply_delete', //删除提现信息
    dimensioncodeCreate: '/api/admindimensioncode/create', //生成二维码
    scoregroupList: '/api/adminscoregroup/list', //获取评分组列表信息
    scoregroupGet: '/api/adminscoregroup/get', //获取评分组详情信息
    scoregroupSave: '/api/adminscoregroup/save', //保存评分组信息
    scoregroupUpdate: '/api/adminscoregroup/update', //修改评分组信息
    scoregroupDelete: '/api/adminscoregroup/delete', //删除评分组信息
    scoreitemList: '/api/adminscoreitem/list', //获取评分项列表信息
    scoreitemGet: '/api/adminscoreitem/get', //获取评分项信息
    scoreitemSave: '/api/adminscoreitem/save', //保存评分项信息
    scoreitemUpdate: '/api/adminscoreitem/update', //修改评分项信息
    scoreitemDelete: '/api/adminscoreitem/delete', //删除评分项信息
    contentCycleRecycle: '/api/admincontent/cycle_recycle', //回收内容信息
    contentCycleDelete: '/api/admincontent/cycle_delete', //删除内容信息

    globalStatistic: '/api/adminglobal/statistic', //获取全局统计信息
    flowSourceList: '/api/adminflow/source/list', //获取来源、来访域名、搜索词信息
    statisticMemberList: '/api/adminstatistic/member/list', //获取会员注册数
    flowPvList: '/api/adminflow/pv/list', //获取pv、ip、访客数信息,趋势分析统计

    channelCopy: '/api/adminchannel/copy', //栏目复制    
    channelTree: '/api/adminchannel/tree', //栏目树
    channelGet: '/api/adminchannel/get', //栏目信息获取
    channelList: '/api/adminchannel/list', //获取栏目信息
    channelDelete: '/api/adminchannel/delete', //删除栏目
    channelPriority: '/api/adminchannel/priority', //栏目排序
    channelSave: '/api/adminchannel/save', //栏目添加
    channelUpdate: '/api/adminchannel/update', //栏目修改
    channelCheckPath: '/api/adminchannel/v_check_path', //验证栏目路径是否为重复
    contentGet: '/api/admincontent/get', //获取内容
    contentSave: '/api/admincontent/save', //发布内容接口
    contentView: '/api/admincontent/view', //查看内容接口
    contentUpdate: '/api/admincontent/update', //修改内容接口
    contentDelete: '/api/admincontent/delete', //删除内容接口
    contentRecord: '/api/admincontent/record/list', //操作记录接口
    contentMove: '/api/admincontent/move', //移动接口
    contentCopy: '/api/admincontent/copy', //内容复制
    contentCheck: '/api/admincontent/check', //内容审核
    contentRecommend: '/api/admincontent/recommend', //推荐
    contentReject: '/api/admincontent/reject', //内容退回
    contentSubmit: '/api/admincontent/submit', //内容提交
    contentSendToWeixin: '/api/admincontent/send_to_weixin',
    contentSend: '/api/admincontent/send_to_topic', //推送至专题接口
    contentStatic: '/api/admincontent/static', //生成静态页
    contentPriority: '/api/admincontent/priority', //保存固顶接口
    contentPush: '/api/admincontent/push', //推送接口
    contentPigeonhole: '/api/admincontent/pigeonhole', //归档接口
    contentUnpigeonhole: '/api/admincontent/unpigeonhole', //出档接口
    contentRefer: '/api/admincontent/refer', //内容引用
    topicListAll: '/api/admintopic/by_channel', //专题列表
    topicList: '/api/admintopic/list', //专题列表，分页
    topicGet: '/api/admintopic/get', //专题获取
    topicSave: '/api/admintopic/save', //专题添加
    topicDelete: '/api/admintopic/delete', //专题删除
    topicUpdate: '/api/admintopic/update', //专题更新
    topicPriority: '/api/admintopic/priority', //专题排序
    topicTplList: '/api/admintopic/tpl_list', //专题模版
    crontabList: '/api/admintask/list', //定时任务列表
    crontabGet: '/api/admintask/get', //定时任务获取详情
    crontabSave: '/api/admintask/save', //定时任务保存
    crontabUpdate: '/api/admintask/update', //定时任务修改
    crontabDelete: '/api/admintask/delete', //定时任务删除
    acquisitionList: '/api/adminacquisition/list', //采集列表
    workflowList: '/api/adminworkflow/list', //工作流列表
    workflowGet: '/api/adminworkflow/get', //工作流详情
    workflowSave: '/api/adminworkflow/save', //工作流保存
    workflowUpdate: '/api/adminworkflow/update', //工作流修改
    workflowDelete: '/api/adminworkflow/delete', //工作流删除
    workflowPriority: '/api/adminworkflow/priority', //工作流保存排序

    linkList: '/api/adminfriendlink/list', //友情链接列表
    linkGet: '/api/adminfriendlink/get', //友情链接详情
    linkSave: '/api/adminfriendlink/save', //友情链接保存
    linkUpdate: '/api/adminfriendlink/update', //友情链接修改
    linkDelete: '/api/adminfriendlink/delete', //友情链接删除
    linkPriority: '/api/adminfriendlink/priority', //友情链接修改排序
    linkTypeList: '/api/adminfriendlink/ctg_list', //友情链接类别列表
    linkTypeGet: '/api/adminfriendlink/ctg_get', //有情链接类别详情
    linkTypeSave: '/api/adminfriendlink/ctg_save', //友情链接列表保存
    linkTypeUpdate: '/api/adminfriendlink/ctg_priority', //友情链接修改
    linkTypeDelete: '/api/adminfriendlink/ctg_delete', //友情链接删除
    adSpaceList: '/api/adminadvertising/space_list', //广告版位列表
    adSpaceGet: '/api/adminadvertising/space_get', //广告版位详情
    adSpaceSave: '/api/adminadvertising/space_save', //广告版位新增
    adSpaceUpdate: '/api/adminadvertising/space_update', //广告版位修改
    adSpaceDelete: '/api/adminadvertising/space_delete', //广告版位删除
    adList: '/api/adminadvertising/list', //广告列表
    adGet: '/api/adminadvertising/get', //广告详情
    adSave: '/api/adminadvertising/save', //广告新增
    adUpdate: '/api/adminadvertising/update', //广告修改
    adDelete: '/api/adminadvertising/delete', //广告删除
    fileList: '/api/adminfile/list', //附件列表
    fileDelete: '/api/adminfile/delete', //删除附件
    fileInvalid: '/api/adminfile/freefiles_delete', //标志原有附件失效
    fileEffective: '/api/adminfile/flag', //标志原有附件有效
    contentShareList: '/api/admincontent/share_list', //共享管理列表
    contentShareAduit: '/api/admincontent/share_check', //共享信息审核
    contentShareDelete: '/api/admincontent/share_delete', //共享信息删除
    flowSearchWordList: '/api/adminflow/searchword/list', //搜索词统计
    flowPagesList: '/api/adminflow/pages/list', //受访页面统计
    flowAreaList: '/api/adminflow/area/list', //来访地区
    flowEnterpageList: '/api/adminflow/enterpage/list', //入口页面统计
    statisticChannelList: '/api/adminstatistic/channel/list', //栏目访问量统计
    statisticContentList: '/api/adminstatistic/content/list', //获取内容发布统计信息
    statisticWorkloadList: '/api/adminstatistic/workload/list', //获取工作量统计信息
    localAll: '/api/adminadmin/local_all', //获取所有管理员
    statisticCommentList: '/api/adminstatistic/comment/list', //获取评论统计信息
    statisticGuestbookList: '/api/adminstatistic/guestbook/list', //获取留言统计信息
    commentRecommend: '/api/admincomment/recommend', //评论推荐
    commentReply: '/api/admincomment/reply', //评论回复
    commentItemList: '/api/admincomment/list_by_content', //内容评论管理列表
    voteList: '/api/adminvote_topic/list', //问卷调查列表
    voteGet: '/api/adminvote_topic/get', //问卷调查详情
    voteSave: '/api/adminvote_topic/save', //问卷调查新增
    voteUpdate: '/api/adminvote_topic/update', //问卷调查修改
    voteDelete: '/api/adminvote_topic/delete', //问卷调查删除
    voteSaveContent: '/api/adminvote_topic/priority', //调查问卷保存内容

    guestbookList: '/api/adminguestbook/list', //留言列表
    guestbookSave: '/api/adminguestbook/save', //留言添加
    guestbookGet: '/api/adminguestbook/get', //留言详情
    guestbookUpdate: '/api/adminguestbook/update', //留言修改
    guestbookDelete: '/api/adminguestbook/delete', //留言删除
    guestbookCheck: '/api/adminguestbook/check', //留言审核/取消审核
    guestbookRecommend: '/api/adminguestbook/recommend', //留言推荐/取消推荐
    guestbookTypeList: '/api/adminguestbook_ctg/list', //留言类型列表
    guestbookTypeGet: '/api/adminguestbook_ctg/get', // 留言类型详情
    guestbookTypeSave: '/api/adminguestbook_ctg/save', //留言类型新增
    guestbookTypeUpdate: '/api/adminguestbook_ctg/update', //留言类型修改
    guestbookTypeDelete: '/api/adminguestbook_ctg/delete', //留言类型删除

    weixinGet: '/api/adminweixin/get', //获取公众号详情
    weixinConfig: '/api/adminweixin/config', //设置公众号
    weixinMenuList: '/api/adminweixinMenu/list', //获取自定义菜单列表信息
    weixinMenuGet: '/api/adminweixinMenu/get', //获取自定义菜单详情信息
    weixinMenuSave: '/api/adminweixinMenu/save', //添加自定义菜单信息
    weixinMenuUpdate: '/api/adminweixinMenu/update', //修改自定义菜单信息
    weixinMenuDelete: '/api/adminweixinMenu/delete', //删除自定义菜单信息
    weixinMessageList: '/api/adminweixinMessage/list', //获取回复列表信息
    weixinMessageGet: '/api/adminweixinMessage/get', //获取回复详细信息
    weixinMessageSave: '/api/adminweixinMessage/save', //添加回复
    weixinMessageUpdate: '/api/adminweixinMessage/update', //修改回复
    weixinMessageDelete: '/api/adminweixinMessage/delete', //删除回复
    weixinMessageDefaultGet: '/api/adminweixinMessage/default_get', //获取默认回复详细信息
    weixinMenuOMenu: '/api/adminweixinMenu/o_menu', //修改自定义菜单信息
    statList: '/api/adminstat/list', //获取统计信息
    statGet: '/api/adminstat/get', //获取统计信息
    statSave: '/api/adminstat/save', //保存统计信息
    statUpdate: '/api/adminstat/update', //修改统计信息
    statDelete: '/api/adminstat/delete', //删除统计信息
    ossGet: '/api/adminoss/get', //获取云存储oss信息
    ossSave: '/api/adminoss/save', //保存oss信息
    ossUpdate: '/api/adminoss/update', //修改oss信息
    ossDelete: '/api/adminoss/delete', //删除oss信息
    flowVisitorList: '/api/adminflow/visitor/list', //忠诚度统计
    staticIndex: '/api/adminstatic/index', //首页静态化
    staticChannel: '/api/adminstatic/channel', //栏目静态化
    staticContent: '/api/adminstatic/content', //内容静态化
    staticProgress: '/api/adminstatic/progress', //查看进度
    staticIndexRemove: '/api/adminstatic/index_remove', //8）静态化首页删除
    jobapplyList: '/api/adminjobapply/list', //获取职位申请列表信息
    jobapplyDelete: '/api/adminjobapply/delete', //28）职位申请删除接口
    jobapplyView: '/api/adminjobapply/view', //简历查看接口
    frameGetDB: '/api/adminframe/getDB', //获取数据库类型名称
    mysqlDataList: '/api/adminmysql/data/list', //备份数据表列表 mysql
    oracleDataList: '/api/adminoracle/data/list', //备份数据表列表 oracle
    sqlserverDataList: '/api/adminsqlserver/data/list', //备份数据表列表 sqlserver
    db2DataList: '/api/admindb2/data/list', //备份数据表列表 db2
    mysqlDataListfields: '/api/adminmysql/data/listfields', //备份数据表详情信息
    oracleDataListfields: '/api/adminoracle/data/listfields', //备份数据表详情信息
    sqlserverDataListfields: '/api/adminsqlserver/data/listfields', //备份数据表详情信息
    db2DataListfields: '/api/admindb2/data/listfields', //备份数据表详情信息
    mysqlDataBackup: '/api/adminmysql/data/backup', //备份数据
    oracleDataBackup: '/api/adminoracle/data/backup', //备份数据
    sqlserverDataBackup: '/api/adminsqlserver/data/backup', //备份数据
    db2DataBackup: '/api/admindb2/data/backup', //备份数据

    //数据库恢复
    mysqlDataFiles: '/api/adminmysql/data/files', //获取数据库文件列表信息
    oracleDataFiles: '/api/adminoracle/data/files', //获取数据库文件列表信息
    sqlserverDataFiles: '/api/adminsqlserver/data/files', //获取数据库文件列表信息
    db2DataFiles: '/api/admindb2/data/files', //获取数据库文件列表信息
    mysqlDataListDataBases: '/api/adminmysql/data/listDataBases', //获取数据库列表信息
    sqlserverDataListDataBases: '/api/adminsqlserver/data/listDataBases', //获取数据库列表信息
    mysqlDataRevert: '/api/adminmysql/data/revert', //恢复数据库
    oracleDataRevert: '/api/adminoracle/data/revert', //恢复数据库
    sqlserverDataRevert: '/api/adminsqlserver/data/revert', //恢复数据库
    db2DataRevert: '/api/admindb2/data/revert', //恢复数据库

    mysqlDataOrigName: '/api/adminmysql/data/origName', //截取原文件名
    oracleDataOrigName: '/api/adminoracle/data/origName', //截取原文件名
    sqlserverDataOrigName: '/api/adminsqlserver/data/origName', //截取原文件名
    db2DataOrigName: '/api/admindb2/data/origName', //截取原文件名
    mysqlDataRename: '/api/adminmysql/data/rename', //文件重命名
    oracleDataRename: '/api/adminoracle/data/rename', //文件重命名
    sqlserverDataRename: '/api/adminsqlserver/data/rename', //文件重命名
    db2DataRename: '/api/admindb2/data/rename', //文件重命名
    mysqlDataExport: '/api/adminmysql/data/export', //下载文件
    oracleDataExport: '/api/adminoracle/data/export', //下载文件
    sqlserverDataExport: '/api/adminsqlserver/data/export', //下载文件
    db2DataExport: '/api/admindb2/data/export', //下载文件
    mysqlDataDelete: '/api/adminmysql/data/delete', //删除文件
    oracleDataDelete: '/api/adminoracle/data/delete', //删除文件
    sqlserverDataDelete: '/api/adminsqlserver/data/delete', //删除文件
    db2DataDelete: '/api/admindb2/data/delete', //删除文件
    mysqlDataDefaultCatalog: '/api/adminmysql/data/defaultCatalog', //获取默认数据库名称
    sqlserverDataDefaultCatalog: '/api/adminsqlserver/data/defaultCatalog', //获取默认数据库名称
    //标签向导
    directiveList: '/api/admindirective/list', //获取标签向导列表信息
    directiveGet: '/api/admindirective/get', //获取标签向导详情信息
    directiveSave: '/api/admindirective/save', //添加标签向导详情信息
    directiveUpdate: '/api/admindirective/update', //修改标签向导详情信息
    directiveDelete: '/api/admindirective/delete', //删除标签向导详情信息

    collectList: '/api/adminacquisition/list', //采集任务列表
    collectGet: '/api/adminacquisition/get', //采集任务详情
    collectSave: '/api/adminacquisition/save', //采集任务新增
    collectUpdate: '/api/adminacquisition/update', //采集任务修改
    collectDelete: '/api/adminacquisition/delete', //采集任务删除
    collectStart: '/api/adminacquisition/start', //采集任务开始
    collectEnd: '/api/adminacquisition/end', //采集任务停止
    collectPause: '/api/adminacquisition/pause', //采集任务暂停
    collectCancel: '/api/adminacquisition/cancel', //采集任务取消
    collectHistoryLIst: '/api/adminacquisition/history', //采集历史列表
    collectSpeedData: '/api/adminacquisition/progress_data', //查看采集进度
    collectHistoryDelete: '/api/adminacquisition/history_delete', //采集历史删除
    departmentList: '/api/admindepartment/list', //部门列表
    departmentGet: '/api/admindepartment/get', //部门详情
    departmentSave: '/api/admindepartment/save', //部门添加
    departmentUpdate: '/api/admindepartment/update', //部门修改
    departmentDelete: '/api/admindepartment/delete', //部门删除
    departmentCheckName: '/api/admindepartment/check_name', //部门名称校验
    departmentPriority: '/api/admindepartment/priority', //部门保存排序
    departmentMemberList: '/api/admindepartment/member_list', //部门成员列表
    departmentTree: '/api/admindepartment/tree', //部门树
    getAllChannel: '/api/adminchannel/all', //获取全站栏目数据

    customFormList: '/api/admincustom/list', //自定义表单列表
    customFormGet: '/api/admincustom/get', //自定义表单详情
    customFormSave: '/api/admincustom/save', //自定义表单保存
    customFormDelete: '/api/admin/custom/delete', //自定义表单删除
    customFormUpdate: '/api/admincustom/update', //自定义表单修改
    customFormPublish: '/api/admincustom/publish', //自定义表单详情
    customFiledList: '/api/adminfiled/list', //自定义字段列表
    customFiledGet: '/api/adminfiled/get', //自定义字段详情
    customFiledSave: '/api/adminfiled/save', //自定义字段保存
    customFiledUpdate: '/api/adminfiled/update', //自定义字段修改
    customFiledDelete: '/api/adminfiled/delete', //自定义字段删除
    customFiledCheck: '/api/adminfiled/check_field', //自定义字段检验
    customFiledPriority: '/api/adminfiled/priority', //保存排序
    customFormPriority: '/api/admincustom/priority', //自定义表单排序
    customRecordPage: '/api/adminrecord/page', //自定义表单记录分页
    customRecordGet: '/api/adminrecord/get', //自定义表单记录详情
    customRecordDelete: '/api/adminrecord/delete', //记录删除
    customRecordCheck: '/api/adminrecord/check', //记录审核

    smsServerList: '/api/adminsms/list', //短信服务列表
    smsServerGET: '/api/adminsms/get', //短信服务详情
    smsServerUpdate: '/api/adminsms/update', //短信服务修改
    smsServerSave: '/api/adminsms/save', //短信服务保存
    smsServerDelete: '/api/adminsms/delete', //短信服务删除
    smsServersmsRecordList: '/api/adminsmsRecord/list', //短信服务记录列表
    smsServersmsRecordDelete: '/api/adminsmsRecord/delete', //短信服务记录删除

    templateList: '/api/admintemplate/list', //模板列表
    visualSave: '/api/adminvisual/save', //

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