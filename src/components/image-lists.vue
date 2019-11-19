<template>
    <div class="list-right">
        <div class="list-a"><a href="#">数据源</a> / <a href="#">全部数据源</a></div>
        <ul class="ul-right"  v-for="item in rightDatas.data" :key="item.code">
            <p class="imges-titile">{{item.text}}</p>
            <li class="li-right" v-for="itemChild of item.childList" :key="itemChild.code">
                <img :src="itemChild.avatar"/><br />
                <span>{{itemChild.text}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{rightDatas:Object},
}
</script>

<style scoped>
    .ul__right{
        list-style: none;
    }
    .imges-titile{
        margin: 10px 0px;
    }
    .li-right{
        display: inline-block;
        margin-right: 16px;
        margin-bottom: 10px;
        padding: 8px;
        background:#FFFFFF;
        border:1px solid #E4E4E4;
    }
    .list-right{
        display: flex;
        flex-direction: column;
        color: #626C7F;
    }
    .list-a{margin-bottom: 28px;}
    .list-a a{text-decoration: none;color: #626C7F;}
    a:focus{color: blue}
</style>