<template lang="pug">
  div
    h1 props → 変わらずpropsを使用
    h2 -----------------------------------------------------
    UserList(:users="data.users")
    h2 -----------------------------------------------------
</template>

<script lang="js">
import { defineComponent, reactive } from '@nuxtjs/composition-api'


export default defineComponent({
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: 'TARO' },
        { id: 2, name: 'JIRO' },
        { id: 3, name: 'SABURO' },
      ],
    })

    setTimeout(() => {
      data.users.push({ id: 4, name: 'SHIRO' })
    }, 3000);

    return {
      data
    }
  },
})
</script>
