/**
 * @description: 栏目树
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-04-13 10:12:13
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-06 14:26:01
 */
import request from '@/utils/request'

export default {
    data() {
        return {
            channelVisble: false, //选择栏目弹窗,
            labelDialogTitle: '',
            currentCheckChannelId: 0, //当前选中栏目
            channelProps: {
                label: "name",
                children: "child",
                isLeaf: "hasChild",
                id: "id"
            },
        }
    },
    methods: {
        ansyChannelTree(node, resolve) { //异步加载栏目树形结构
            if (node.level === 0) {
                return resolve([{
                    name: '根目录',
                    id: "",
                    isChild: true
                }]);
            }
            if (node.level > 0) {
                request
                    .post(this.$api.channelList, {
                        parentId: node.data.id
                    })
                    .then(res => {
                        const data = [];
                        for (let i in res.body) {
                            let obj = {};
                            obj.id = res.body[i].id;
                            obj.isChild = res.body[i].childCount > 0 ? false : true;
                            obj.name = res.body[i].name;
                            data.push(obj);
                        }
                        return resolve(data);
                    });
            }
        },
        handleClose(done) {
            done();
        }
    }
}