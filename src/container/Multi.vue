<template>
  <div class="p-multi">
  <x-header>多选题</x-header>
     <group>
       <x-input type="text" value="选择你最爱吃的荤菜" class="first-ce" :show-clear="false"></x-input>
     </group>
     <group>
       <cell>
         <x-input type="text" value="荷叶蒸鸡"></x-input>
         <img slot="icon"  @click.self="showPlugin" src="../img/icon.png"  width="20" style="display:block">
       </cell>
        <cell>
         <x-input type="text" value="烤鹅"></x-input>
         <img slot="icon"  @click.self="showPlugin" src="../img/icon.png"  width="20" style="display:block">
       </cell>
        <cell>
         <x-input type="text" value="红烧肉"></x-input>
         <img slot="icon"  @click.self="showPlugin" src="../img/icon.png"  width="20" style="display:block">
       </cell>
        <cell>
         <x-input type="text" value="红烧排骨"></x-input>
         <img slot="icon"  @click.self="showPlugin" src="../img/icon.png"  width="20" style="display:block">
       </cell>
        <cell>
         <x-input type="text" value="肉沫蒸蛋"></x-input>
         <img slot="icon"  @click.self="showPlugin" src="../img/icon.png"  width="20" style="display:block">
       </cell>
        <cell>
         <x-input type="text" value="清蒸排骨"></x-input>
         <img slot="icon"  @click.self="showPlugin" src="../img/icon.png"  width="20" style="display:block">
       </cell>
        <cell>
         <x-input type="text" value="盐水鸡"></x-input>
         <img slot="icon"  @click.self="showPlugin" src="../img/icon.png"  width="20" style="display:block">
       </cell>
       <cell>
         <div style="width:300px;text-align:center;color:red">
         增加选项
         </div>
       </cell>
     </group>
     <group>
         <x-switch :title="('允许答题者选择其他')"></x-switch>
         <x-switch :title="('设为必答题')"></x-switch>
     </group>
     <group>
       <cell :title="('最多选择几项')" class="cell-he">
      <!--  <x-input type="text" title="最少选择几项"></x-input> -->
         <div slot="value">
           <span>
              <popup-picker :title="('不限')" class="ce-foot" :data="list2"
              @on-show="onShow" @on-hide="onHide" @on-change="on-Change">
              </popup-picker>
           </span>
         </div>
       </cell>
        <cell :title="('最少选择几项')" class="cell-he">
         <div slot="value">
           <span v-for item in list>
               <popup-picker :title="('不限')" class="ce-foot" :data="list2"
              @on-show="onShow" @on-hide="onHide" @on-change="on-Change">
              </popup-picker>
           </span>
         </div>
       </cell>
      </group>

  </div>
</template>

<script>
    import {
    XHeader,
    Group,
    XInput,
    Cell,
    XSwitch,
    PopupPicker
    } from 'vux'
    export default {
      components: {
        Group,
        XInput,
        XHeader,
        Cell,
        XSwitch,
        PopupPicker
      },
      data () {
        return {
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
     .p-multi{
      .first-ce{
        width:100%;
        height:50px;
        font-size: 14px;
        border-bottom: none;
      }
      .vux-cell-primary{
             flex-sharink:1;
             flex-grow:1;
             flex-basis:0%;
      }
      .weui-icon{
        display:none;
      }
      .cell-he{
        height:30px;
        flex:1;
      }
      .ce-foot{
        height:50px;
      }
     }
</style>
