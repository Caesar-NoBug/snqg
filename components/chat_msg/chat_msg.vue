<template>
      <div class="background">
        <div class="topBlock">
          <span class="topItem">
            <nut-icon name="checked" color="#696969" size="24px"></nut-icon>
          </span>
          <span class="topItem">
            <nut-icon name="add" color="#696969" size="24px"></nut-icon>
          </span>
          <span style="width: 96%; margin-left: 2%;">
            <nut-searchbar v-model="searchValue" background="#EFEFEF">
              <template v-slot:leftin>
                <nut-icon name="search2" color="#E74343"></nut-icon>
              </template>
            </nut-searchbar>
          </span>
        </div>
        <div class="infoBody">
          <nut-cellgroup>
            <nut-cell @click="gotoDock()" v-for="info in infos" :title="info.name" center :sub-title="info.detail" :desc="getTime(info.time)" is-link="true">
              <template v-slot:icon>
                  <img :src="info.avater" style="width: 30px; height: 30px; margin-right: 10px;"/>
              </template>
            </nut-cell>
          </nut-cellgroup>
        </div>
        <!-- <div>{{getTime1()}}</div> -->
      </div>
</template>

<script>
  import TimeUtil from '../../utils/TimeUtil'
  import NavigateUtil from '../../utils/NavigateUtil';
  
  export default {
    name:"chat_info",
    data() {
      return {
        infos: [{
          name: "张三",
          avater:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png",
          detail: "你好呀",
          time: new Date().getTime() / 1000,
        }, {
          name: "李四",
          avater:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png",
          detail: "你是？",
          time: new Date().getTime() / 1000 - 22 * 60 * 60,
        }, {
          name: "caesar",
          avater:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png",
          detail: "...",
          time: new Date().getTime() / 1000 - 72 * 60 * 60,
        }]
      };
    },
    methods: {
      getTime: function(time){
        return TimeUtil.getExactTimeString(time);
      },
      getTime1: function(){
        return TimeUtil.getMomentString(new Date().getTime() / 1000);
      },
      gotoDock: function(){
        console.log(0)
        NavigateUtil.navigateTo('/pages/chat_dock/chat_dock');
        console.log(1)
      }
    }
  }
</script>

<style>
.background{
  top: 0;
  height: 750px;
  background-color: #EFEFEF;
}
.topBlock{
  top: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #EFEFEF;
}
.topItem{
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666666;
}
.infoBody{
  width: 94%;
  margin-left: 3%;
}
</style>