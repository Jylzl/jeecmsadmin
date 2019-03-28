'use strict';
export default {
    operate: {
        //全文检索
        fullTextSearch:{
            mes: {
                success: '索引生成成功',
            },
            label: {
                channelName: '栏目',
                pleaseSelect:'请选择',
                dateRange:'时间范围',
                to:'至',
                startDate:'开始时间',
                endDate:'结束时间',
                createNum:'每次生成数量',
                recentOneWeek:'最近一周',
                recentOneMon:'最近一月',
                recentThreeMon:'最近三月',
            },
            btn: {
                crateIndex:'生成索引',
                reset: '重置',
            },
            rules:{
                required:'此项必填',
                number: '只能输入正整数',
            },
            submenu: {
                fullTextSearch: '全文检索',
            }
        },
        //内容复用
        contentReuse:{
            mes: {
                copysuccess: '复制成功',
                citesuccess: '引用成功',
            },
            label: {
                root:'根目录',
                refresh:'刷新',
                all: '本站内容',
                draft:'草稿',
                prepared:'待审',
                passed:'已审',
                checked:'终审',
                rejected:'退回',
                title:'标题',
                releaseName:'发布者',
                fixedTop:'固顶',
                recommend:'推荐',
                pleaseType:'所有类型',
                ordinary:'普通',
                graphic:'图文',
                focus:'焦点',
                headlines:'头条',
                idDesc:'ID降序',
                idAsc:'ID升序',
                releaseDesc:'发布时间降',
                releaseAsc:'发布时间升',
                fixedTopDesc:'固顶降,发布降',
                fixedTopAsc:'固顶降,发布升',
                dailyClicksDesc:'日点击降',
                weekClicksDesc:'周点击降',
                monthClicksDesc:'月点击降',
                totalClickDesc:'总点击降',
                dailyCommentDesc:'日评论降',
                weekCommentDesc:'周评论降',
                monthCommentDesc:'月评论降',
                totalCommentDesc:'总评论降',
                dailyDownDesc:'日下载降',
                weekDownDesc:'周下载降',
                monthDownDesc:'月下载降',
                allDownDesc:'总下载降',
                dailyTopDownDesc:'日顶降',
                weekTopDownDesc:'周顶降',
                monthTopDownDesc:'月顶降',
                allTopDownDesc:'总顶降',
                releaseDate:'发布时间',
                recomendDown:'推荐降,发布升',
                recomendUp:'推荐升,发布降',
                status:'状态',
                id:'ID',
                auditing:'审核中',
                auditPassed:'审核通过',
                recycle:'回收站',
                submission:'投稿',
                archive:'归档',
                sourceTitle:'共享给其他站点的内容',
                source:'源',
                shareTitle:'从其他站点共享到本站的内容',
                share:'享',
                topicBatch:'推送至专题'
            },
            btn: {
                query:'查询',
                copyBatch: '复制',
                moveBatch:'移动',
                citeBatch:'引用',
                
                clance:'关闭',
                ok:'确认',
            },
            submenu: {
                contentReuse: '内容复用',
            }
        },
        crontab:{
            mes: {
            },
            label: {
                id: 'ID',
                crontabType:'任务类型',
                crontabName:'任务名称',
                createUserName:'创建用户',
                createTime:'创建时间',
                status:'状态',
                enabled:'启用',
                disabled:'禁用',
                intervalUnit:'执行周期',
                execycle:'执行方式',
                minute:'分',
                hour:'时',
                day:'日',
                week:'周',
                month:'月',  
                dayOfWeek:'星期',
                dayOfMonth:'日',
                interval:'每隔',
                exp:'cron表达式',
                status:'状态',
                remark:'备注',
                indexPageStatic:'首页静态化',
                channelStatic:'栏目页静态化',
                contentStatic:'内容页静态化',
                collection:'采集',
                distribution:'分发',
                crontabChannel:'栏目',
                crontabAcqu:'采集',
                crontabFtp:'FTP',
                ftpTip:'分发文件夹  相对根目录(例/main/channel)',
            },
            btn: {
                ftpDelete:'删除',
                ftpAdd:'增加',
            },
            rules:{
                required:'此项必填',
                number: '只能输入正整数',
            },
            submenu: {
                crontab: '定时任务',
                crontabList:'定时任务列表',
                crontabSave:'定时任务新增',
                crontabUpdate:'定时任务修改',
            }
        },
        workflow:{
            mes: {
            },
            label: {
                id:'ID',
                name: '名称',
                priority:'排序',
                cross:'是否可跨级审核',
                enabled:'是',
                disabled:'否',
                description:'描述',
                workflowSetp:'步骤',
                workflowRole:'角色',
                workflowType:'类型',
                workflowOperate:'操作',
                workflowTip:'说明：会签表示需要所选角色中所有用户都审核才能进入下一步，普通流转则只需要其中任意一个用户审核就能进入下一步。',
                setp:'工作流步骤',
                setpItem:'第',
                setpItem1:'步',
                jointlysign:'会签',
                generalcirculation:'普通流转',
            },
            btn: {
                crontabSave: '重置',
                setpAdd:'增加',
                setpDelete:'删除',
            },
            rules:{
            },
            submenu: {
                workflow: '工作流管理',
                workflowList:'工作流列表',
                workflowUpdate:'工作流修改',
                workflowSave:'工作流新增',
            }
        },
        link:{
            mes: {
            },
            label: {
                id:'ID',
                name: '名称',
                priority:'排序',
                logo:'Logo',
                noLogo:'无Logo',
                views:'点击次数',
                enabled:'显示',
                OK:'是',
                NO:'否',
                ctgId:'网站类别',
                domain:'网站地址',
                description:'描述',
            },
            btn: {
                crontabSave: '重置',
                setpAdd:'增加',
                setpDelete:'删除',
                linkType:'友情链接类别',
                query:'查询',
                back:'返回',
                saveContent:'保存内容',
                submit:'添加',
            },
            rules:{
            },
            submenu: {
                link: '友情链接',
                linkList:'友情链接列表',
                linkUpdate:'友情链接修改',
                linkSave:'友情链接新增',
                typeList:'友情链接类别列表',
            }
        },
        word:{
            mes: {
                tagAddTip:'Tag管理 - 添加',
                tagEditTip:'Tag管理 - 修改',
                colse:'确定关闭？',
                tagTip:'tag已存在',
                ok:'确定',
                cancel:'取消', 
                wordAddTip:'热词管理 - 添加',    
                wordEditTip:'热词管理 - 修改',  
                dictionaryAddTip:'字典 - 添加',
                dictionaryEditTip:'字典 - 修改',
            },
            label: {
                id:'ID',
                name: '名称',
                priority:'排序',
                wordCount:'文档数',
                replacement:'替换为',
                search:'敏感词',
                key:'关键字',
                content:'内容',
                enabled:'启用',
                disabled:'禁用',
                origin:'来源',
                hotWord:'热词',
                hitCount:'搜索次数',
                recommend:'是否推荐',
                priorityByTimeDown:'搜索次数降序',
                priorityByTimeUp:'搜索次数升序',
                priorityDown:'排序降序',
                priorityUp:'排序升序',
                orderNum:'订单号',
                buyusername:'购买用户',
                authorusername:'作者',    
                payMode:'交易类型',
                charge:'收费',
                reward:'打赏',
                drawTime:"最后提现时间",
                totalDown:'总收益倒序',
                totalUp:'总收益升序',
                yearDown:'年收益倒序',
                yearUp:'年收益升序',
                monthDown:'月收益倒序',
                monthUp:"月收益升序",
                dayDown:'日收益倒序',
                dayUp:'日收益升序',
                timeDown:'被购买次数降序',
                timeUp:'被购买次数升序',
                balanceDown:'账户余额降序',
                balanceUp:'账户余额升序',
                orderNumber:'订单号/流水号',
                buyUserName:'购买的用户',
                authorUserName:'作者',
                buyTime:'购买时间',
                chargeAmount:'成交金额',     
                authorAmount:"作者所得金额",
                platAmount:'平台平分金额',

                payWay:'付款方式',
                payType:'交易类型',

                contentBuyCount:'被购买次数',
                drawCount:'提现次数',
                contentTotalAmount:'总收益',
                contentYearAmount:'年收益',
                contentMonthAmount:'月收益',
                contentDayAmount:'日收益',
                contentNoPayAmount:'账户余额',
                orderNumAliPay:'支付宝支付',
                orderNumWeiXin:'微信支付',
                other:'其他',
                yearAmount:'今年收费',
                monthAmount:'本月收费',
                dayAmount:'今日收费',
                lastBuyTime:'最新购买时间',
                totalAmount:'累计收费',
                commissionTotal:'佣金总金额',
                commissionYear:'佣金年金额',
                commissionMonth:'佣金月金额',
                commissionDay:'佣金日金额',
                drawNum:'单号',
                payUserName:'支付用户',
                drawUserName:'提现用户',
                payTime:'支付时间',
                alipayNum:'阿里转账流水号',
                weixinNum:'微信转账流水号',
                payAccount:'支付账户',
                drawAccount:'提现账户',
                applyAmount:'提现金额',
                applyTime:'申请时间',
                applyStatus:'状态',
                applying:'申请中',
                applySucc:'申请成功待支付',
                applyErro:'申请失败',
                drawSucc:'提现成功',
                logoWord:'logo文字',
                loginContent:'二维码内容',
                loginSize:'二维码大小',
                fontSize:'logo文字大小',
                logoWord:'logo文字',
                logoPicPath:'logo地址',
                logoImage:'二维码LOGO图片',
                dictionaryType:'字典项分类',
                value:'值',
                addCheckTip:'所属分类已有此值',
                groupName:'分组名',
                defGroup:'默认分组',
                score:'分值',
                scoreText:'评分文本',
                imagePath:'图片路径',
                return:'退回',
                draft:'草稿',
                Audit:'审核中',
                ReviewPass:'审核通过',
                recycleBin:'回收站',
                Submission:'投稿',
                pigeonhole:'归档',



            },
            btn: {
                saveContent:'保存内容',
                commission:'平台佣金所得统计',
                check:'审核',
                return:'退回',
                reduction:'还原',
            },
            rules:{
            },
            submenu: {
                word:'词汇管理',
                tag:'TAG管理',
                tagList:'TAG管理列表',
                sensitivity:'敏感词管理',
                sensitivityList:'敏感词管理列表',
                keyword:'关键词',
                keywordList:'关键词列表',
                origin:'来源',
                originList:'来源列表',
                searchwords:'热词管理',
                searchwordsList:'热词管理列表',
                contentBuy:'内容购买记录',
                contentBuyList:'内容购买记录列表',
                userAccount:'用户账户统计',
                userAccountList:'用户账户统计列表',
                charge:'内容收费统计',
                chargeList:'内容收费统计列表',
                commission:'平台佣金所得统计',
                accountPay:'转账管理',
                accountPayList:'转账管理列表',
                drawApply:'提现管理',
                drawApplyList:'提现管理列表',
                traAccount:'转账',
                dimensioncode:'二维码管理',
                dimensioncodeCreate:'二维码创建',
                dictionary:'字典',
                dictionaryList:'字典列表',
                scoregroup:'评分组管理',
                scoregroupList:'评分组管理列表',
                scoregroupAdd:'评分组管理添加',
                scoregroupEdit:'评分组管理修改',
                scoreitem:'评分项管理',
                scoreitemList:'评分项列表',
                scoreitemAdd:'评分项添加',
                scoreitemEdit:'评分项修改',
                contentCycle:'内容回收站',
                contentCycleList:'内容回收站列表',

            }
        },
        ad:{
            mes: {
            },
            label: {
                id:'ID',
                name: '名称',
                priority:'排序',
                logo:'Logo',
                adspaceName:'版位',
                weight:'权重',
                category:'类型',
                text:'文字',
                image:'图片',
                flash:'Flash',
                code:'代码',
                dateRange:'时间范围',
                enabled:'启用',
                clickRange:'点击/展现=点击率',
                OK:'是',
                NO:'否',
                clickCount:'点击次数',
                displayCount:'展现次数',
                content:'内容',
                attr_image_size:'图片尺寸',
                size_tip:'宽×高',
                attr_image_link:'链接地址',
                attr_image_title:'链接提示',
                attr_image_url:'图片地址',
                attr_image_target:'链接目标',
                attr_flash_url:'FLASH地址',
                flash_size:'Flash尺寸',
                attr_flash_height:'FLASH高度',
                attr_flash_width:'FLASH宽度',
                attr_text_title:'文字内容',
                attr_text_link:'文字链接',
                attr_text_color:'文字颜色',
                attr_text_font:'文字大小',
                attr_text_fontTip:'如12px',
                attr_text_target:'链接目标',
                NewWindows:'新窗口',
                SelfWindows:'原窗口',
                description:'描述',
                save:'广告版位新增',
                update:'广告版位修改',
            },
            btn: {
                save:'新增',
                update:'修改',
                adType:'广告版位',
                back:'返回',
                submit:'添加',
                clance:'取消',
            },
            rules:{
            },
            submenu: {
                ad: '广告管理',
                adList:'广告列表',
                adSave:'广告新增',
                adUpdate:'广告修改',
                adTypeList:'广告版位列表',
            }
        },
        file:{
            mes: {
                reductionSuccess:'还原成功',
            },
            label: {
                id:'ID',
                filename: '文件名',
                size:'大小',
                invalid:'有效',
                enclosure:'无效',
                valid:'是否有效',
                lastModifiedDate:'最后修改时间',
                currentFolder:'当前目录: ',
            },
            btn: {
                deleteInvalid:'删除所有失效附件',
                enclosure:'标志原有附件有效',
                back:'返回上一层目录',
            },
            rules:{
            },
            submenu: {
                file:'附件管理',
                fileList: '附件列表',
            }
        },
        contentShare:{
            mes: {
                success:'审核成功',
            },
            label: {
                all:'全部',
                pendingAudit:'待审',
                pass:'通过',
                push:'推送',
                id:'ID',
                title:'标题',
                channelName:'源栏目',
                targetChannelName: '目标栏目',
                releaseName:'发布者',
                releaseDate:'发布时间',
                checkStatus:'状态',
                releaseUser:'作者：',
                views:'点击量：',
                viewreleaseDate:'发布时间：',
            },
            btn: {
                delete:'删除共享',
                aduit:'审核',
                preview:'前台预览',
            },
            rules:{
            },
            submenu: {
                contentShare:'共享管理',
                contentShareList: '共享列表',
                contentShareView:'查看内容',
            }
        },
        comment:{
            mes: {
                reply:'回复成功',
                updateComment:'修改评论成功',
                updatereply:'修改回复成功',
                replyVaileMes:'请填写回复信息',
                commentVaileMes:'请填写评论信息',
                success:'操作成功',
            },
            label: {
                aduitStatus:'审核状态',
                yes:'是',
                no:'否',
                recommendStatus:'是否推荐',
                contentId:'文章ID',
                id:'ID',
                title:'标题',
                commentator:'评论者：',
                commentTime:'评论时间：',
                IP:'IP：',
                commentContent:'评论内容',
                replyContent:'回复内容',
                waitforaudit:'待审核',
                refuse:'审核不通过',
                aduit:'审核通过',
                defaultReply:'请输入回复内容',
                defaultComment:'请输入评论内容',
                waitforaudit:'等待审核',
                reCommend:'推荐',
            },
            btn: {
                aduit:'审核通过',
                refuse:'审核不通过',
                reply:'回复',
                updatereply:'修改回复',
                cancelReCommond:'取消推荐',
                reCommond:'推荐',
                update:'修改评论',
                delete:'删除',
                view:'查看',
                submit:'提交',
                cancel:'取消',
                updateComment:'修改评论',
            },
            rules:{
            },
            submenu: {
                comment:'评论管理',
                commentList: '评论列表',
                commentEdit:'评论详情',
            }
        },
        weixin:{
            mes: {
              
            },
            label: {
                wxAppkey:'App Key',
                wxAppSecret:'App Secret',
                welcome:'关注欢迎语',
                weixinImage:'微信二维码',
                updateNull:'不修改请留空',
                id:'ID',
                menuName:'菜单名称',
                operate:'操作选项',
                click:'点击事件',
                viewurl:"URL地址",
                menuType:'菜单类型',
                key:'Key',
                keyTip:'点击事件KEY(自定义回复关键字)',
                number:'关键字',
                title:'标题',
                url:'链接地址',
                img:'图片',

            },
            btn: {                
                delete:'删除',
                view:'查看',
                submit:'提交',
                cancel:'取消',
                reset:'重置',
                add:'添加',
                adding:'提交并继续添加',
            },
            rules:{
            },
            submenu: {
              weixinConfig:'公众号设置',
              weixin:'公众号设置',
              weixinMenu:'自定义菜单',  
              weixinMenuList:'自定义菜单列表', 
              weixinMenuAdd:'自定义菜单添加',
              weixinMenuEdit:'自定义菜单修改',
              childList:'列表',
              child:'二级菜单',  
              childAdd:'添加',
              childUpdate:'修改',
              weixinMessage:'自定义回复',
              weixinMessageList:'自定义回复列表',
              weixinMessageAdd:'自定义回复添加',
              weixinMessageEdit:'自定义回复修改',
            }
        },
        vote:{
            mes: {
            },
            label: {
                id:'ID',
                beforethestart:'审核状态',
                processing:'是',
                over:'否',
                title:'标题',
                voteStatus:'状态',
                voteResult:'查看结果',
                stop:'暂停',
                totalCount:'投票总数',
                title:'标题',
                beforethestart:'未开始',
                processing:'进行中',
                over:'已结束',
                voteview:'查看',
                default:'默认',
                dateRange:'有效期',
                to:'至',
                startDate:'开始时间',
                endDate:'结束时间',
                description:'说明',
                disabled:'是否开启',
                repeateHour:'重复答卷限制',
                enabled:'是',
                disabled:'否',
                titleplaceholder:'请输入问题标题',


            },
            btn: {
               beforethestart:'未开始',
               processing:'进行中',
               over:'已结束',
               saveContent:'保存修改',
               addRadioSubject:'添加单选题',
               addCheckedSubject:'添加多选题',
               addQue:'添加问答题',
            },
            rules:{
            },
            submenu: {
                vote:'问卷调查',
                voteList: '问卷调查列表',
                voteEdit:'问卷调查修改',
                voteSave:'问卷调查新增',
            }
        },
        menu:'运营',
    },

    
    
};