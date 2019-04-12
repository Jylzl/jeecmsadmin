import axios from "axios";
export default {
    data(){
        return{
            channelVisble: false, //选择栏目弹窗,
            labelDialogTitle: '',
            currentCheckChannelId: 0,//当前选中栏目
            channelProps: {
                label: "name",
                children: "child",
                isLeaf: "hasChild",
                id: "id"
            },
        }
    },
    methods:{
        ansyChannelTree(node, resolve) {//异步加载栏目树形结构
            if (node.level === 0) {
                return resolve([
                    {
                        name:'根目录',
                        id: "",
                        isChild: true
                    }
                ]);
            }
            if (node.level > 0) {
                axios
                    .post(this.$api.channelList, { parentId: node.data.id })
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
        handleClose(done){
            done();
        }
    }
}