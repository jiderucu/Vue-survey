<template>
  <div class="p-set">
  <x-header>高级设置</x-header>
     <group style="border: none">
       <datetime v-model="value1" @on-change="change" :title="('开始时间')" class="text-de"></datetime>

       <datetime v-model="value2" @on-change="change" :title="('结束时间')" class="text-de"></datetime>
     </group>
      <group>
       <cell :title="('用户限制')" class="cell-he">
         <div slot="value">
           <span>
              <popup-picker :title="('不限')" class="ce-foot" :data="list2"
              @on-show="onShow" @on-hide="onHide" @on-change="on-Change">
              </popup-picker>
           </span>
         </div>
       </cell>
        <cell :title="('IP限制')" class="cell-he">
         <div slot="value">
           <span v-for item in list>
               <popup-picker :title="('不限')" class="ce-foot" :data="list2"
              @on-show="onShow" @on-hide="onHide" @on-change="on-Change">
              </popup-picker>
           </span>
         </div>
       </cell>
      </group>
        <router-link to="/container/Create" class="main-box">
          <span class="box">
            确认
          </span>
        </router-link>
  </div>

</template>
<script>
  import {
    Datetime,
    Group,
    Cell,
    PopupPicker,
    XButton,
    XHeader
  } from 'vux'
  export default {
    components: {
      Datetime,
      Group,
      Cell,
      PopupPicker,
      XButton,
      XHeader
    },
    data () {
      return {
        value1: '2017-04-20',
        value2: '2017-04-27',
        startDate: '2015-11-11',
        endDate: '2017-11-11',
        list2: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']]
      }
    },
    methods: {
      change (value) {
        console.log('change', value)
      },
      onChange (val) {
        console.log('val change', val)
      },
      changeList10 () {
        this.list2 = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']]
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      }
    }
  }
</script>
<style lang="less">
    .p-set{
      .text-de{
        text-decoration:none;
        height: 30px;
        line-height: 30px;
      }
      .cell-he{
        height:30px;
      }
      .ce-foot{
        height:50px;
      }
     .box{
      width: 35%;
      height:30px;
      display: block;
      border: 1px solid red;
      margin-top:25px;
      text-align: center;
      line-height:30px;
      border-radius: 15px;
      margin-left: 28%;
     }
     .main-box{
      text-decoration:none;
      color: red;
     }

    }
</style>

