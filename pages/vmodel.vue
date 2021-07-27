<template>
  <div>
    <h1>
      v-model → 変わらずv-modelを使用,<br />
      this.$emit → context.emitを使用
    </h1>
    <h2>-----------------------------------------------------</h2>
    <form @submit.prevent>
      <InputName v-model="form.name" />
      <InputName2 v-model="form.name" />
    </form>
    <h1>props → 変わらずpropsを使用</h1>
    <h2>-----------------------------------------------------</h2>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const form = reactive({
      name: '山田',
    })

    return {
      form
    }
  },
})
</script>
