<template>
  <div class="p-essay">
  <x-header>简答题</x-header>
       <group>
       <x-input type="text" value="sssss"></x-input>
         <x-switch :title="('设为必答题')"></x-switch>
       </group>
       <router-link to="/container/Create" class="text-de">
          <span class="sure">确认</span>
       </router-link>
  </div>
</template>
<script>
import {
  Group,
  XSwitch,
  XInput,
  XHeader
} from 'vux'
export default {
  components: {
    Group,
    XSwitch,
    XInput,
    XHeader
  }
}
</script>
<style lang="less">
    .p-essay{
      .sure{
        width: 35%;
        height:30px;
        line-height:30px;
        text-align:center;
        display:block;
        border: 1px solid red;
        border-radius: 15px;
        margin-top:500px;
        margin-left: 30%;
      }
      .text-de{
        text-decoration:none;
        color: red;

      }
    }
</style>
