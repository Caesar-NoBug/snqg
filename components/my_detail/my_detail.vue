<template>
  <div style="margin-top: 10%;">
    <nut-navbar :left-show="false">
      <template #left>
        <div style="font-size: 18px; line-height: 30px; color: white;">
          <nut-icon name="left" color="white"></nut-icon>我 的
        </div>
      </template>
    </nut-navbar>
  </div>
  <div class="head">
    <nut-avatar
        size="large"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png">
    </nut-avatar>
    <span style="display: flex; flex-wrap: wrap; width: 50%; margin-top: 5%; margin-left: 5%;">
      <span class="name">姓名</span>
      <span class="verticalLine"></span>
      <nut-tag plain>志愿者</nut-tag>
      <span class="id">ID:114514</span>
      <nut-icon name="eye"></nut-icon>
    </span>
    
  </div>
  <div class="phoneInfo">
    <span class="phoneItem">--</span>
    <span class="phoneItem">--</span>
    <span class="phoneItem">通话次数</span>
    <span class="phoneItem">通话时长</span>
  </div>
  <div style="font-size: 0;">
    <img src="/static/my_background.png" class="img"><div class="line"></div>
  </div>
  
  <div style="margin-top: 7%;">
     <nut-cell center title="个人信息" icon="my" sub-title="查看或修改个人信息 " is-link="true"></nut-cell>
     <nut-cell center title="通话历史" icon="comment" sub-title="查看您一年内的通话历史 " is-link="true"></nut-cell>
     <nut-cell center title="信息统计" icon="horizontal" sub-title="统计所有通话时长及通话质量 " is-link="true"></nut-cell>
  </div>
  <div style="margin-top: 40%;">
    <nut-button size="large" type="primary" color="#E74343">
        退 出 登 录
    </nut-button>
  </div>
</template>

<script>
</script>

<style>
  .head{
    margin-left: 5%;
    display: flex;
  }
  .name{
    font-size: 20px;
    font-weight: bold;
    margin-left: 5%;
    letter-spacing: 5px;
  }
  .verticalLine{
    margin-left: 5%;
    margin-right: 8%;
    background-color: gray;
    height: 25px;
    width: 2px;
  }
  .id{
    margin-left: 5%;
    margin-right: 15%;
    font-size: 18px;
    color: dimgray;
  }
  .phoneInfo{
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
  }
  .phoneItem{
    width: 50%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .img{
    margin-top: 5%;
    margin-left: 10%;
    height: 50px;
  }
  .line{
    background-color: lightgray;
    width: 100%;
    height: 3px;
  }
</style>