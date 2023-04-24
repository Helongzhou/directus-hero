<template>
    <private-view title="Example Collection List">
        <v-list>
            <v-list-item v-for="col in collections" v-bind:key="col.collection">
                {{ col.collection }}
            </v-list-item>
        </v-list>
        <v-button v-on:click="logToConsole">Log collections to console</v-button>
    </private-view>
</template>

<script>
export default {
    data() {
        return {
            collections: null,
        };
    },
    methods: {
        logToConsole: function () {
            console.log(this.collections);
        },
    },
    inject: ['api'],
    mounted() {
        // 记录系统字段，以便您可以看到它下面有哪些可用属性完成后删除此行。
        console.log(this.api);

        // 获取要与此模块一起使用的所有可用集合的列表
        this.api.get('/collections?limit=-1').then((res) => {
            this.collections = res.data.data;
        });
    },
};
</script>