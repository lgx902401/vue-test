<template>
  <div class="home">
    <van-button @touchstart.stop="show = true">
      弹出默认键盘
    </van-button>

    <van-number-keyboard
            :show="show"
            extra-key="."
            close-button-text="完成"
            @blur="show = false"
            @input="onInput"
            @delete="onDelete"></van-number-keyboard>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data(){
    return{
      show:true
    }
  },
  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('删除');
    }
  }
}
</script>
