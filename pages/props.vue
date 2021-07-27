<template lang="pug">
  div
    h1 props → 変わらずpropsを使用
    h2 -----------------------------------------------------親
    UserList(:users="data.users" :message="message")
    h2 -----------------------------------------------------親
</template>

<script lang="js">
import { defineComponent, reactive,ref } from '@nuxtjs/composition-api'


export default defineComponent({
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: 'TARO' },
        { id: 2, name: 'JIRO' },
        { id: 3, name: 'SABURO' },
      ],
    })
    const message = ref("※3秒後に一件追加されます");

    setTimeout(() => {
      data.users.push({ id: 4, name: 'SHIRO' })
      message.value = "※一件追加！"
    }, 3000);

    return {
      message,
      data
    }
  },
})
</script>
