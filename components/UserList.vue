<template lang="pug">
  div
    h2 ---------------------------------------------------子
    p ユーザー件数: {{ userNum }}
    ul
      li(v-for="u in users" :key="u.id") {{ u.id }} {{ u.name }}
    p {{ message }}
    h2 ---------------------------------------------------子
</template>

<script lang="js">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    users: {
      // type: Array,
      // required: true
    },
    message:{
      // type: string,
      // required: true
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
