<template>
  <div class="p-result">
    <x-header>统计结果</x-header>
     <div>
       <tab :line-width="2">
         <tab-item :selected="demo==item" v-for='(item,index) in list'  @click="demo = item" :key="index" class="vux-1px-r">
              {{item}}
         </tab-item>
       </tab>
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
  </div>
</template>
<script>
 import {
  Tab,
  TabItem,
  XProgress,
  Box,
  Flexbox,
  FlexboxItem,
  XHeader
 } from 'vux'
 export default {

   components: {
     Tab,
     TabItem,
     XProgress,
     Box,
     Flexbox,
     FlexboxItem,
     XHeader
   },
   data () {
     return {
       list: ['统计结果', '提交明细'],
       demo: '统计结果',
       index: 0,
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
   },
   methods: {
     onItemClick (index) {
       console.log('on item click:', index)
     }
   }
}
</script>
<style lang="less" scoped>
   .p-result{
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
