<template lang="pug">
  div
    h1 v-model → 変わらずv-modelを使用,<br />this.$emit → context.emitを使用
    h2 -----------------------------------------------------
    form(@submit.prevent)
      InputName(v-model="form.name")
      InputName2(v-model="form.name")
    h2 -----------------------------------------------------
</template>

<script lang="js">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const form = reactive({
      name: 'TARO',
    })

    return {
      form
    }
  },
})
</script>
