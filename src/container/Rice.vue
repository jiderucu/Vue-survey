<template>
  <div class="p-rice">
      <x-header>饭堂菜式投票</x-header>
         <img src="../img/(1).jpg">
        <div class="vux-1px-b">
        <div class="text-bo">
           <h3>
            饭堂菜式投票
           </h3>
        </div>
           <p class="text-le">
             欢迎参与食堂菜式投票，您的选择将决定食堂菜式的供应，谢谢参与!
           </p>
         </div>
           <p class="box-cell">
             选择你最爱吃的荤菜
           </p>
           <div class="line-box" v-for="item in list">
             <input type="checkbox"  class="input-check">
             <span class="line-c">{{item.title}}</span>
           </div>
           <p class="box-cell">
             选择你最爱吃的点心
           </p>
           <div class="line-box" v-for="item in list">
             <input type="checkbox"  class="input-check">
             <span class="line-c">{{item.title}}</span>
           </div>
           <router-link to="/ricestyle" class='text-de'>
              <x-button type="warn" class="foot">
              确认提交
              </x-button>
           </router-link>
  </div>
</template>

<script>
  import {
    XHeader,
    XButton
  } from 'vux'
  export default {
    components: {
      XHeader,
      XButton
    },
    data () {
      return {
        list: [{
          title: '荷叶蒸鸡'
        }, {
          title: '烤鹅'
        }, {
          title: '红烧肉'
        }, {
          title: '红烧排骨'
        }, {
          title: '肉沫蒸蛋'
        }, {
          title: '清蒸排骨'
        }, {
          title: '盐水鸡'
        }]
      }
    }
  }
</script>
<style lang="less" scoped>
   .p-rice{
    .text-bo{
      width: 100%;
      text-align: center;
    }
    .text-le{
      font-size: 14px;
      text-align:left;
      padding-bottom: 18px;
    }
    .box-cell{
      font-size: 15px;
      font-weight: 700;
      margin-left: 10px;
    }
    .line-box{
      height:30px;
      width:100%;
      margin-left:10px;
    }
    .input-check{
      width: 20px;
      height: 20px;
    }
    .line-c{
      vertical-align:super;
      font-size: 14px;
    }
    .foot{
      width:80%;
      text-align: center;
      margin-top:30px;
      margin-bottom:30px;
      border-radius:20px;
    }
    .text-de{
      text-decoration:none
    }
   }
</style>
