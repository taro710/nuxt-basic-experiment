<template>
  <div>
    <h1>.sync → 変わらず.syncを使用</h1>
    <h2>-----------------------------------------------------</h2>
    <form @submit.prevent>
      <InputName3 :value.sync="form.name" />
      <InputName4 :value.sync="form.name" />
    </form>
    <h2>-----------------------------------------------------</h2>
  </div>
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
