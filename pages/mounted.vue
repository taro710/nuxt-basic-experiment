<template lang="pug">
  div
    h1 mounted → onMountedを使用（DOM参照可能）
    h2 -----------------------------------------------------
    form(@submit.prevent)
      div
        label(for="email") email
        input(ref="emailInput" id="email" type="text")
    h2 -----------------------------------------------------
</template>

<script lang="js">
import { defineComponent, reactive, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const emailInput = ref(null);

    onMounted(()=>{
      // composition api以前は this.$refs.emailInputのような形で取得していた
      emailInput.value.focus() //email欄のDOMを取得して、読み込み時にinputタグ(DOM)にフォーカスが当たるようにしている
    })
    console.info("before mount", emailInput.value)

    return {
      emailInput,
    }
  },
})
</script>
