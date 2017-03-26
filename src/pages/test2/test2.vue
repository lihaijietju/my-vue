<template>
    <div>
        <mt-range v-model="test" :onChange="change">-->
            <span slot="start">0</span>
            <span slot="end">100</span>
        </mt-range>
    </div>
</template>
<style lang="scss">
    body {
        background-color: pink;
    }
</style>
<script>
    import range from '../../components/range';
    import Vue from 'vue';

    Vue.use(range);
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            'range': range,
        }
    }
</script>
