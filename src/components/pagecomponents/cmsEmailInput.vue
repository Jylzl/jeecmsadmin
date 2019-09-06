<!--
 * @description: 邮箱输入自动补全功能
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 13:09:31
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-06 11:50:34
 -->
<template>
    <el-autocomplete v-model="email" :fetch-suggestions="querySearch" placeholder="请输入邮箱" :trigger-on-focus="false"
        style="width:100%;" clearable></el-autocomplete>
</template>

<script>
    export default {
        name: "cms-email-input",
        props: {
            //值
            value: {
                type: String,
                default: ""
            },
            //默认配置
            restaurants: {
                type: Array,
                default () {
                    return [{
                            value: "@qq.com"
                        },
                        {
                            value: "@163.com"
                        },
                        {
                            value: "@163.net"
                        },
                        {
                            value: "@126.com"
                        },
                        {
                            value: "@sina.com"
                        },
                        {
                            value: "@yahoo.com"
                        },
                        {
                            value: "@gmail.com"
                        },
                        {
                            value: "@outlook.com"
                        },
                        {
                            value: "@yeah.net"
                        },
                        {
                            value: "@hotmail.com"
                        }
                    ];
                }
            }
        },
        data() {
            return {
                email: this.value
            };
        },
        methods: {
            //邮箱自动补全功能
            querySearch(queryString, cb) {
                //邮箱自动补全搜索方法
                function createFilter(queryString) {
                    return restaurant => {
                        return (
                            restaurant.value
                            .toLowerCase()
                            .indexOf(queryString.toLowerCase()) === 0
                        );
                    };
                }
                let index = queryString.lastIndexOf("@");
                var restaurants = this.restaurants;
                if (index > -1) {
                    restaurants = restaurants.filter(restaurant => {
                        return (
                            restaurant.value.substr(
                                0,
                                queryString.length - index
                            ) == queryString.substr(index, queryString.length)
                        );
                    });
                    restaurants = restaurants.map(restaurant => {
                        let obj = {};
                        obj.value = restaurant.value.substring(
                            queryString.length - index
                        );
                        return obj;
                    });
                }
                restaurants = restaurants.map(restaurant => {
                    let obj = {};
                    obj.value = queryString + restaurant.value;
                    return obj;
                });
                var results = queryString ?
                    restaurants.filter(createFilter(queryString)) :
                    restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            }
        }
    };
</script>