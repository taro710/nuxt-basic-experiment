<template>
  <div>
    <form @submit.prevent>
      <InputName3 :value.sync="form.name" />
      <InputName4 :value.sync="form.name" />
    </form>
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
