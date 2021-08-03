<template lang="pug">
  div
    h1 created → 普通の関数呼び出しとして書く
    p createdはDOMがまだ作られていない状態で、mountedではDOMが作成された直後の状態。つまり、createdのタイミングではDOMの参照は不可能
    h2 -----------------------------------------------------
    div
      p ユーザー件数: {{ userNum }}
      ul
        li(v-for="u in data.users" :key="u.id") {{ u.id }} {{ u.name }}
    h2 -----------------------------------------------------
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const data = reactive({
      users: [{ id: 1, name: 'TARO' }],
    });

    const userNum = computed(() => data.users.length);

    // created ... DOMにさわれることが保証されてない。APIからデータ取得する処理などを書く
    setTimeout(() => {
      data.users.push(
        ...[
          { id: 2, name: 'JIRO' },
          { id: 3, name: 'SABURO' },
        ]
      );
    }, 3000);

    return {
      data,
      userNum,
    };
  },
});
</script>
