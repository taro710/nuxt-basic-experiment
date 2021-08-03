<template lang="pug">
  div
    h1 mounted → onMountedを使用
    p createdはDOMがまだ作られていない状態で、mountedではDOMが作成された直後の状態。つまり、mountedのタイミングではDOMの参照は可能
    h2 -----------------------------------------------------
    form(@submit.prevent)
      div
        label(for="email") email
        input(ref="emailInput" id="email" type="text")
        p {{ message }}
    h2 -----------------------------------------------------
</template>

<script lang="js">
import { defineComponent, reactive, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const emailInput = ref(null);
    const message = ref("まだmountedじゃない");

    onMounted(()=>{
      // composition api以前は this.$refs.emailInputのような形で取得していた
      emailInput.value.focus() //email欄のDOMを取得して、読み込み時にinputタグ(DOM)にフォーカスが当たるようにしている
      message.value = "mounted！"
    })
    console.info("before mount", emailInput.value)

    return {
      emailInput,
      message
    }
  },
})
</script>
