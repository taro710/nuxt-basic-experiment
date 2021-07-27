<template lang="pug">
  div
    p ユーザー件数: {{ userNum }}
    ul
      li(v-for="u in users" :key="u.id") {{ u.id }} {{ u.name }}
</template>

<script lang="js">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const userNum = computed(() => props.users.length)
    return {
      userNum
    }
  },
})
</script>
