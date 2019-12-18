<template>
  <div class="card">
    <a href="http://121.199.47.77/design/login"><img  src="https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735" alt="图片加载中" title="安徽经邦" class="card--image"></a>
    <div class="card-main">
      <div class="card--title">
        <h2>安徽经邦设计器</h2>
        <div class="writer--box">
          <img src="https://wt-avatars.oss.aliyuncs.com/40/b6bd371c9f2148da8330ba665e3350a9.jpg" alt="用户" class="user--image">
          <p class="user--name">安徽经邦</p>
          <p class="user--time">2019-12-18&nbsp;18:30</p>
        </div>
      </div>
      <div class="card--bottom">
        <a>设计器</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card{
    width: 100%;
    border: 1px solid #E1E1E1;
    border-radius: 5px;
  }
  .user--image{
    border-radius: 50%;
  }
  h2{
    margin: 10px 0;
    color: #444;
  }
  .card-main{
    width: 95%;
    margin: 0 auto;
  }
  .writer--box{
    display: flex;
    align-items: center
  }
  p{
    color: #999;
    font-size: 14px;
  }
  .user--name{
    margin: 0px 50px 0 20px;
  }
  .card--bottom{
    margin-top: 20px;
    border-top: 1px solid #E1E1E1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
  }
  .card--bottom a{
    color: #69D0D1;
    text-decoration: none;
    font-size: 14px;
  }
  @media (max-width: 1080px) {
    .pc{display: none !important;}
    .mobile{display: block !important;}
    .card--image{
      width: 100%;
    }
  }
  @media (min-width: 1081px) {
    .pc{display: block !important;}
    .mobile{display: none !important;} 
    .card--image{
      width: 100%;
    }
  }
</style>