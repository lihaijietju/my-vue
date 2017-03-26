<template>
    <div>
        <img src="../../assets/img/logo.png">
        <h1>test</h1>
        <ul class="page_box">
            <li @click="pre"><</li>
            <li v-for="item in show_page_numbers" @click="setIndex(item)" :class="{active:currentPage===item}">
                {{item}}
            </li>
            <li @click="next">></li>
        </ul>
    </div>
</template>
<style lang="scss">
    body {
        background-color: #eee;
        color:white;
    }


    .page_box li {
        display: inline-block;
        width:30px;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        margin: 0;
        border:1px solid #ddd;
        text-align: center;
    }

    .active {
        background: pink;
        border: 1px solid pink;
    }


</style>
<script>
    export default{
        name: 'pagenation',
        props: {
            total: {
                type: Number
            },
            currentIndex: {
                type: Number,
                default: 1
            },
            changePage: {
                type: Function
            }
        },
        mounted(){
            this.initPage();
        },
        data(){
            return {
                show_page_numbers: [],
                display_limit: 7,
                currentPage: this.currentIndex
            }
        },
        methods: {
            initPage(){

                this.show_page_numbers = [];

                for (let i = 1; i <= this.total; i++) {
                    this.show_page_numbers.push(i);
                }

                if (this.show_page_numbers <= this.display_limit) {
                    return;
                }

                let begin = this.currentPage - 3;
                let end = this.currentPage + 3;
                begin = begin > 0 ? begin : 1;
                begin = begin > (this.total - this.display_limit) ? (this.total - this.display_limit) : begin;

                end = end >= this.total ? this.total : end;
                end = end < this.display_limit ? this.display_limit : end;

                let arr = this.show_page_numbers.slice(begin - 1, end);
                this.show_page_numbers = arr;
            },
            pre(){
                if(this.currentPage===1){
                    return;
                }
                this.currentPage = this.currentPage - 1;
                this.setIndex(this.currentPage);
            },
            next(){
                if(this.currentPage===this.total){
                    return;
                }
                this.currentPage = this.currentPage + 1;
                this.setIndex(this.currentPage);
            },
            setIndex(index){
                this.currentPage = index;
                this.initPage();
            }

        }
    }


</script>
