<template>
  <div>
    <label for="name">お名前</label>
    <input
      id="name"
      :value="value"
      type="text"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script lang="js">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
  },
})
</script>
