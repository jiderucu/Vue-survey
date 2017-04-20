<template>
    <div class="x-creae">
        <x-header>编辑</x-header>
           <img src="../img/(1).jpg">
           <h3 style="text-align:center">妇女节奇葩礼物大吐槽</h3>
           <textarea cols="15" rows="3" class="re-wid" >
                近俩日，微博、微信朋友圈晒"三八"妇女节福利已经成为   不少女性网友的热疗话题，礼物五花八门
           </textarea>
            <group>
               <cell :title="('你收到过那些奇葩的妇女节礼物')" :link="{path:'/essay'}" class="ce-height">
                  <img slot="icon" @click.stop="showPlugin" src="../img/icon.png"  width="20" style="display:block;margin-right: 5px">
              </cell>
                <cell :title="('如果公司给你发奇葩的妇女节礼物')" :link="{path:'/multi'}" class="ce-height">
                 <img slot="icon"  @click.self="showPlugin" src="../img/icon.png"  width="20" style="display:block;margin-right: 5px">
              </cell>
               <cell :title="('你在朋友圈或者微博中看到别人晒')" is-link class="ce-height">
                 <img slot="icon" @click="showPlugin" src="../img/icon.png"  width="20" style="display:block;margin-right: 5px">
              </cell>
                <cell :title="('妇女节你们公司是否有妇女节礼物')" is-link class="ce-height">
                 <img slot="icon" @click="showPlugin" src="../img/icon.png"  width="20" style="display:block;margin-right: 5px">
              </cell>
              <popup-picker :title="('增加题目')" class="ce-foot" :data="list2"
              @on-show="onShow" @on-hide="onHide" @on-change="on-Change">
              </popup-picker>
            </group>
            <x-textarea :max="200" name="detail" :placeholder="('这里可以添加底部描述') " :show-counter="false">
            </x-textarea>
            <flexbox style="text-align:center;height:40px" class="vux-1px-t">
               <flexbox-item :span="1/2">
                 <router-link to="/set" class="flex-st">
                    <div class="flex-demo">高级设置</div>
                 </router-link>
               </flexbox-item>
               <flexbox-item :span="1/2">
                  <router-link to="/rice" class="flex-co">
                     <div class="flex-demo">发布</div>
                  </router-link>
               </flexbox-item>
            </flexbox>


    </div>
</template>

<script>
  import {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    ConfirmPlugin,
    XTextarea,
    PopupPicker,
    Flexbox,
    FlexboxItem,
    XHeader
  } from 'vux'
  import Vue from 'vue'
  Vue.use(ConfirmPlugin)

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      XTextarea,
      PopupPicker,
      Flexbox,
      FlexboxItem,
      XHeader
    },
    methods: {
      showPlugin (e) {
        this.$vux.confirm.show({
          title: '删除提醒',
          content: '您确定要删除该题?',

          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          },
          onCancel () {
            console.log('plugin 取消')
          },
          onConfirm () {
            console.log('plugin 确定')
          },
          onChange (val) {
            console.log('val change', val)
          }
        })
      },
      onChange (val) {
        console.log('val change', val)
      },
      changeList10 () {
        this.list2 = [['单选题', '多选题', '问答题', '填空题']]
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      }
    },
    data () {
      return {
        list2: [['单选题', '多选题', '问答题', '填空题']]
      }
    }
  }
</script>
<style lang="less">
   .x-creae{
    .re-wid{
      width: 100%;
      border:none;
      resize: none;
    }
    .ce-height{
      height:30px;
      font-size: 14px;
    }
    .ce-foot{
      height:40px;
      text-align:center;
      color:red;
      font-size: 14px;
    }
    .text-un{
      text-decoration: none;
      color: black;
    }
    .flex-st{
      height:40px;
      line-height:40px;
      color:red;
      text-decoration: none;
    }
    .flex-co{
      display: block;
      background-color: red;
      height:40px;
      line-height: 40px;
      color:white;
      text-decoration:none
    }
   }
</style>

