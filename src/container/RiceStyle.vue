 <template>
   <div class="p-style">
    <x-header>
      饭堂菜式投票
    </x-header>
      <div :class="{'show': index===0}">
         <p class="result_left">
           提交量
         </p>
         <p class="result_right">
           浏览量
         </p>
         <p class="box-cell">
             1.选择你最爱吃的荤菜
           </p>
         <div class="box-cell" v-for="item in list1">
           <span class="ce-left">
             {{item.title}}
           </span>
           <flexbox :gutter="0" wrap="wrap">
           <flexbox-item :span="5/6">
              <box gap="15px" class="flex-demo">
              <x-progress :percent="item.percent" :show-cancel="false"></x-progress>
             </box>
           </flexbox-item>
           <flexbox-item :span="1/6">
             <div class="flex-demo">({{item.percent}}%)</div>
           </flexbox-item>
           </flexbox>
         </div>
          <p class="box-cell">
             2.选择你最爱吃的点心
          </p>
          <div class="box-cell" v-for="item in list1">
           <span class="ce-left">
             {{item.title}}
           </span>
           <flexbox :gutter="0" wrap="wrap">
           <flexbox-item :span="5/6">
              <box gap="15px" class="flex-demo">
              <x-progress :percent="item.percent" :show-cancel="false"></x-progress>
             </box>
           </flexbox-item>
           <flexbox-item :span="1/6">
             <div class="flex-demo">({{item.percent}}%)</div>
           </flexbox-item>
           </flexbox>
         </div>
   </div>

       </div>
 </template>
 <script>
   import {
    XProgress,
    Box,
    Flexbox,
    FlexboxItem,
    XHeader
 } from 'vux'
export default {
     components: {
       XProgress,
       Box,
       Flexbox,
       FlexboxItem,
       XHeader
     },
     data () {
       return {
         list1: [{
           id: 1,
           title: '荷叶蒸鸡',
           percent: 30
         }, {
           id: 2,
           title: '烤鸭',
           percent: 40
         }, {
           id: 3,
           title: '红烧肉',
           percent: 20
         }, {
           id: 4,
           title: '红烧排骨',
           percent: 15
         }, {
           id: 5,
           title: '肉沫蒸蛋',
           percent: 19
         }, {
           id: 6,
           title: '清蒸排骨',
           percent: 22
         }, {
           id: 7,
           title: '盐水鸡',
           percent: 33
         }]
       }
     }
   }
 </script>
 <style lang="less">
   .p-style{
    .result_left{
      display:inline-block;
      margin-top: 70px;
      margin-left: 50px;
    }
    .result_right{
      display:inline-block;
      margin-left: 150px;
      margin-top:70px;
    }
    .box-cell{
      font-size: 15px;
      font-weight: 700;
      margin-left: 10px;
    }
    .ce-left{
      margin-left:10px;
    }
    .show{
      display:block;
    }
    .hide{
      display:none;
    }
   }
 </style>

