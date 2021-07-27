<template lang="pug">
  div.container
    div
      h1.title Nuxt Composition APIで作る完全静的サイト
      p.lead いくつかの非同期処理の静的ジェネレート後の挙動の違い
      section
        h2.methodName UseAsync
        p.description
          span.feature 特徴：アクセス時に非同期処理が呼ばれる。従来のasyncDataに近いメソッド。
        p
          nuxt-link(to="/async/kilimanjaro") UseAsyncのデモ (Mount Kilimanjaro)
      section
        h2.methodName UseFetch
        p.description
          span.feature 特徴：ジェネレート時に非同期処理の結果をpayload.jsとして保存し、生成配信後はAPIが呼ばれない。NuxtのFetchメソッドのCompositionAPI版。
          <code>$fetch</code>、<code>$fetchState</code>が利用できる
        p
          nuxt-link(to="/async/denali") UseFetchのデモ (Denali)
      section
        h2.methodName UseStatic
        p.description
          span.feature 特徴：ジェネレート時に非同期処理の結果をJSONデータとして保存し、生成配信後はAPIが呼ばれない。SSR時でも初回アクセス時に内容が保存されるので2回目以降のアクセスが高速。
        p
          nuxt-link(to="/async/everest") UseStaticのデモ (Mount Everest)
      section
        h2.methodName 比較：AsyncData
        nuxt-link(to="/async/aconcagua") AsyncDataのデモ (Aconcagua)
      section
        h2.methodName 比較：Fetch
        nuxt-link(to="/async/kosciuszko") Fetchのデモ (Kosciuszko)
</template>

<script></script>

<style scoped>
.title {
  font-size: 24px;
  margin-bottom: 8px;
  line-height: 1.3;
  color: #445273;
}
.lead {
  margin-bottom: 24px;
}
.methodName {
  font-size: 20px;
  margin-bottom: 4px;
  color: #445273;
}
.description {
  margin-bottom: 12px;
}
.feature {
  font-weight: bold;
}

section {
  margin-bottom: 32px;
}
</style>
