<template>
    <pagenation :current="2" :total="400"></pagenation>
</template>
<style lang="scss">
    body {
        background-color: pink;
    }
</style>
<script>
    import page from '../../components/page';
    import Vue from 'vue';

    Vue.use(page);
    export default{
        data(){
            return {
                msg: 'hello vue',
            };
        },
        components: {
            'page': page,
        },
    };
</script>
