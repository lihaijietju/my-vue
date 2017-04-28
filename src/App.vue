<template>
    <div>
        <div>
            <router-link to="/page">page</router-link>
            <router-link to="/range">range</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import page from './components/page';
    import Vue from 'vue';
    //    import basic from './assets/css/base.css';
    Vue.use(page);
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                test: 10,
            };
        },
        methods: {
            whenChange() {
            },
            change(target) {
                this.test = target;
            },
        },
    };

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
