<template>
  <div class="p-main">
    <x-header>
      我的活动
    </x-header>
    <div class="head-b">
      <img src="" alt="">
      <p slot="label">如初</p>
    </div>
     <span class="head-left">问卷</span>
     <span class="head-left">参与人数</span>
      <div v-for="item in list" :key="item.id" class="flag vux-1px-b">
       <div>
         <a href="##" class="figure flag-item">
         <img :src="item.src">
         </a>
        <div class="figcaption flag-item">
          <div class="flag-title">
           <a href="##" title>{{item.title}}</a>
          </div>
          <div class="flag-time">
            <span class="time-left">{{item.time}}</span>
            <span>{{item.status}}</span>
          </div>
          <div class="flag-type">
            <span class="type-left">{{item.sub}}</span>
            <span class="type-left">{{item.look}}</span>
          </div>
        </div>
        </div>
           <div class="item-foot">
             <router-link to="/">
               <span class="foot-left">暂停</span>
             </router-link>
              <router-link to="/rice">
                <span class="foot-left">生成页</span>
              </router-link>
               <router-link to="/result">
                 <span class="foot-left">统计页</span>
               </router-link>
           </div>
      </div>
    <tabbar>
      <tabbar-item selected link="/container/Main">
        <img slot="icon" src="">
        <span slot="label">我的活动</span>
      </tabbar-item>
      <tabbar-item selected link="/container/Create">
        <img slot="icon" src="">
        <span slot="label">创建</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import {
  Tabbar,
  TabbarItem,
  XHeader
} from 'vux'
export default {
  data () {
    return {
      list: [{
        id: 1,
        src: 'http://placeholder.qiniudn.com/80x80/3cc51f/ffffff',
        title: '饭堂菜式投票',
        time: '2017-03-31 10:52:24',
        status: '进行中',
        sub: '提交(4)',
        look: '浏览(6)'
      }, {
        id: 2,
        src: 'http://placeholder.qiniudn.com/80x80/3cc51f/ffffff',
        title: '妇女节奇葩礼物大吐槽',
        time: '2017-03-31 10:31:24',
        status: '进行中',
        sub: '提交(3)',
        look: '浏览(8)'
      }]
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader
  }
}

</script>
<style lang="less" scoped>
 @import '~vux/src/styles/1px.less';
  .p-main{
    .head-b{
      width: 30%;
      height: 100px;
      border: 1px solid black;
      margin-left: 35%;
      margin-top: 20px;
      text-align:center;
    }
    .head-left{
      font-size: 14px;
      margin-left: 100px;
      margin-top:20px;
    }
     .flag{
      display: table;
      width: 100%;
      margin-top:1rem;
    }
    .flag .flag-item .figure{
      width: 2.4rem;
      height:2.4rem;
    }
    .flag-item{
      display:table-cell;
      padding-left:.8rem ;
      vertical-align: top;
      background-color: #fff;
    }
   a{
    text-decoration: none;
     font-size: 17px;
     font-family:'微软雅黑';
     color: black;
   }
   .flag .flag-item.figcaption{
    width: 133.333333rem;
    padding-left: .4rem;
    padding-right: .2rem;
    position: relative;
   }
   .flag .flag-time{
    padding:.5rem 0 .2rem;
    font-size: 12px;
   }
   .flag-type{
    padding:.3rem 0 .2rem;
   }
   .flag-type .type-left{
    padding:.4rem;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid black;
   }
   .item-foot{
    padding-top: 5px;
    padding-bottom:10px;
   }
   .foot-left{
    margin-left:45px;
   }

  }
</style>
