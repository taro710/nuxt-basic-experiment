<template>
  <div>
    <MountainData :data="data" />
    <p>
      <button @click="$fetch">Fetch</button>
    </p>
    <nuxt-link to="/" class="BackToHome">Back to Home</nuxt-link>
  </div>
</template>

<script>
import {
  defineComponent,
  useFetch,
  ref,
  useContext,
} from '@nuxtjs/composition-api';

const Denali = defineComponent({
  setup() {
    const data = ref({}); // 取得してきたコンテンツを格納するリアクティブな値
    const { $http } = useContext(); // @nuxt/httpモジュールを導入済みの場合useContext()から呼び出せます。

    useFetch(async () => {
      console.log('useFetch');
      // APIからコンテンツを取得する処理
      const result = await $http.$get(
        `https://api.nuxtjs.dev/mountains/denali`
      );
      // 取得したコンテンツを格納
      data.value = result;
    });

    return { data };
  },
});
export default Denali;
</script>

<style scoped>
a {
  display: block;
  margin-top: 24px;
}
</style>
