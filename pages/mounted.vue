<template>
  <div>
    <form @submit.prevent>
      <div>
        <label for="email">email</label>
        <input ref="emailInput" id="email" type="text" />
      </div>
    </form>
  </div>
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
