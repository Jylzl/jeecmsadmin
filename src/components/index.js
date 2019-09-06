/**
 * @description: 全局组件注册
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 15:53:28
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-05 16:26:17
 */
// import appMain from "@/components/appMain.vue";
import cmsInput from '@/components/pagecomponents/cmsInput.vue' //横向标签组件
import cmsButton from '@/components/pagecomponents/cmsButton.vue' //cms图标按钮组件
import cmsPagination from '@/components/pagecomponents/cmsPagination.vue' //cms分页
import cmsBack from '@/components/pagecomponents/cmsBack.vue' //cms返回
// import cmsRole from '@/components/pagecomponents/cmsRole.vue' //cms角色
import cmsUpload from '@/components/pagecomponents/cmsUpload.vue' //cms上传
import cmsTree from '@/components/cmscomponents/cmsTree.vue'
// import cmsSiteTree from '@/components/cmsComponents/cmsSiteTree.vue' //站点树插件
// import cmsEditor from '@/components/pagecomponents/cmsEditor.vue'
import cmsFileUpload from '@/components/pagecomponents/cmsFileUpload.vue'
import cmsAttachUpload from '@/components/pagecomponents/cmsAttachUpload.vue'
import cmsMultipleUpload from '@/components/pagecomponents/cmsMultipleUpload.vue'
import cmsPictrues from '@/components/pagecomponents/cmsPictrues.vue'
import cmsExportUpload from '@/components/pagecomponents/cmsExportUpload'
import cmsSiteDialog from '@/components/cmscomponents/cmsSiteDialog.vue'
import cmsDepartment from '@/components/cmscomponents/cmsDepartment.vue'

// import cmsTopic from '@/views/config/directive/cmsTopic.vue'
// import cmsTag from '@/views/config/directive/cmsTag.vue'
// import cmsAdvertise from '@/views/config/directive/cmsAdvertise.vue'
// import cmsChannel from '@/views/config/directive/cmsChannel.vue'
// import cmsComment from '@/views/config/directive/cmsComment.vue'
// import cmsContent from '@/views/config/directive/cmsContent.vue'

// 这里是重点
const cmsComponents = {
    install: function (Vue) {
        Vue.component('cmsInput', cmsInput);
        Vue.component('cmsButton', cmsButton);
        Vue.component('cmsPagination', cmsPagination);
        Vue.component('cmsBack', cmsBack);
        // Vue.component('cmsRole', cmsRole);
        // Vue.component('appMain', appMain);
        Vue.component('cmsUpload', cmsUpload);
        // Vue.component('cmsSiteTree', cmsSiteTree);
        Vue.component('cmsTree', cmsTree);
        // Vue.component('cmsEditor', cmsEditor);
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