/**
 * @description: 全局组件注册
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 15:53:28
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-06 11:56:41
 */
// import appMain from "@/components/appMain.vue";
// import cmsInput from '@/components/pagecomponents/cmsInput.vue' //横向标签组件
// import cmsEmailInput from '@/components/pagecomponents/cmsEmailInput.vue' //邮箱输入自动补全
// import cmsButton from '@/components/pagecomponents/cmsButton.vue' //cms图标按钮组件
// import cmsPagination from '@/components/pagecomponents/cmsPagination.vue' //cms分页
// import cmsBack from '@/components/pagecomponents/cmsBack.vue' //cms返回
// import cmsRole from '@/components/pagecomponents/cmsRole.vue' //cms角色
// import cmsUpload from '@/components/pagecomponents/cmsUpload.vue' //cms上传
// import cmsTree from '@/components/cmscomponents/cmsTree.vue'
// import cmsSiteTree from '@/components/cmsComponents/cmsSiteTree.vue' //站点树插件
// import cmsEditor from '@/components/pagecomponents/cmsEditor.vue'
// import cmsNEditor from '@/components/pagecomponents/cmsNEditor.vue' //cms富文本-Neditor
// import cmsTEditor from '@/components/pagecomponents/cmsTEditor.vue' //cms富文本-Tinymce
// import cmsFileUpload from '@/components/pagecomponents/cmsFileUpload.vue'
// import cmsAttachUpload from '@/components/pagecomponents/cmsAttachUpload.vue'
// import cmsMultipleUpload from '@/components/pagecomponents/cmsMultipleUpload.vue'
// import cmsPictrues from '@/components/pagecomponents/cmsPictrues.vue'
// import cmsExportUpload from '@/components/pagecomponents/cmsExportUpload'
// import cmsSiteDialog from '@/components/cmscomponents/cmsSiteDialog.vue'
// import cmsDepartment from '@/components/cmscomponents/cmsDepartment.vue'

// import cmsTopic from '@/views/config/directive/cmsTopic.vue'
// import cmsTag from '@/views/config/directive/cmsTag.vue'
// import cmsAdvertise from '@/views/config/directive/cmsAdvertise.vue'
// import cmsChannel from '@/views/config/directive/cmsChannel.vue'
// import cmsComment from '@/views/config/directive/cmsComment.vue'
// import cmsContent from '@/views/config/directive/cmsContent.vue'

const cmsInput = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsInput.vue')), 'cmsInput') // 工作台
const cmsEmailInput = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsEmailInput.vue')), 'cmsEmailInput') // 工作台
const cmsButton = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsButton.vue')), 'cmsButton') // 工作台
const cmsPagination = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsPagination.vue')), 'cmsPagination') // 工作台
const cmsBack = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsBack.vue')), 'cmsBack') // 工作台
const cmsUpload = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsUpload.vue')), 'cmsUpload') // 工作台
const cmsTree = r => require.ensure([], () => r(require('@/components/cmscomponents/cmsTree.vue')), 'cmsTree') // 工作台
const cmsNEditor = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsNEditor.vue')), 'cmsNEditor') // 工作台
const cmsTEditor = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsTEditor.vue')), 'cmsTEditor') // 工作台
const cmsFileUpload = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsFileUpload.vue')), 'cmsFileUpload') // 工作台
const cmsAttachUpload = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsAttachUpload.vue')), 'cmsAttachUpload') // 工作台
const cmsMultipleUpload = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsMultipleUpload.vue')), 'cmsMultipleUpload') // 工作台
const cmsPictrues = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsPictrues.vue')), 'cmsPictrues') // 工作台
const cmsExportUpload = r => require.ensure([], () => r(require('@/components/pagecomponents/cmsExportUpload.vue')), 'cmsExportUpload') // 工作台
const cmsSiteDialog = r => require.ensure([], () => r(require('@/components/cmscomponents/cmsSiteDialog.vue')), 'cmsSiteDialog') // 工作台
const cmsDepartment = r => require.ensure([], () => r(require('@/components/cmscomponents/cmsDepartment.vue')), 'cmsDepartment') // 工作台

// 这里是重点
const cmsComponents = {
    install: function (Vue) {
        Vue.component('cmsInput', cmsInput);
        Vue.component('cmsEmailInput', cmsEmailInput);
        Vue.component('cmsButton', cmsButton);
        Vue.component('cmsPagination', cmsPagination);
        Vue.component('cmsBack', cmsBack);
        // Vue.component('cmsRole', cmsRole);
        // Vue.component('appMain', appMain);
        Vue.component('cmsUpload', cmsUpload);
        // Vue.component('cmsSiteTree', cmsSiteTree);
        Vue.component('cmsTree', cmsTree);
        // Vue.component('cmsEditor', cmsEditor);
        Vue.component('cmsNEditor', cmsNEditor);
        Vue.component('cmsTEditor', cmsTEditor);
        Vue.component('cmsFileUpload', cmsFileUpload);
        Vue.component('cmsAttachUpload', cmsAttachUpload);
        Vue.component('cmsMultipleUpload', cmsMultipleUpload);
        Vue.component('cmsPictrues', cmsPictrues);
        Vue.component('cmsSiteDialog', cmsSiteDialog);
        Vue.component('cmsDepartment', cmsDepartment);
        Vue.component('cmsExportUpload', cmsExportUpload);

        // Vue.component('cmsTopic', cmsTopic);
        // Vue.component('cmsTag', cmsTag);
        // Vue.component('cmsAdvertise', cmsAdvertise);
        // Vue.component('cmsChannel', cmsChannel);
        // Vue.component('cmsComment', cmsComment);
        // Vue.component('cmsContent', cmsContent);
    }
}

// 导出组件
export default cmsComponents