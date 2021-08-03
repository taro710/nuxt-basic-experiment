<template>
  <div>
    <label for="name">お名前</label>
    <input
      id="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
    />
  </div>
</template>

<script lang="js">
import { defineComponent, toRefs, isRef } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
  },
})
</script>
