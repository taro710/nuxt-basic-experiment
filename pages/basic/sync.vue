<template lang="pug">
  div
    h1 .sync → 変わらず.syncを使用
    h2 -----------------------------------------------------
    form(@submit.prevent)
      InputName3(:value.sync="form.name")
      InputName4(:value.sync="form.name")
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
