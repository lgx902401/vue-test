<template>
  <div class="home">
    <van-button @touchstart.stop="show = true">
      弹出默认键盘
    </van-button>

    <van-field
            readonly
            clickable
            :value="value"
            @touchstart.native.stop="show = true">
    </van-field>

    <van-number-keyboard
            v-model="value"
            :show="show"
            :maxlength="6"
            @blur="show = false"></van-number-keyboard>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data(){
    return{
      show:false,
      value: ''
    }
  },
  methods: {
  }
}
</script>
