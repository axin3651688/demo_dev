<template>
    <div class="rightList">
        <div class="aList"><a href="#">数据源</a> / <a href="#">全部数据源</a></div>
        <ul class="rightUl"  v-for="item in rightDatas.data" :key="item.code">
            <p class="imgesTitile">{{item.text}}</p>
            <li class="rightLi" v-for="itemChild of item.childList" :key="itemChild.code">
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
    .rightUl{
        list-style: none;
    }
    .imgesTitile{
        margin: 10px 0px;
    }
    .rightLi{
        display: inline-block;
        margin-right: 16px;
        margin-bottom: 10px;
        padding: 8px;
        background:#FFFFFF;
        border:1px solid #E4E4E4;
    }
    .rightList{
        display: flex;
        flex-direction: column;
        color: #626C7F;
    }
    .aList{margin-bottom: 28px;}
    .aList a{text-decoration: none;color: #626C7F;}
    a:focus{color: blue}
</style>