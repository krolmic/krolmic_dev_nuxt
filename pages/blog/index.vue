<template>
  <h1>Blog</h1>
  <section v-if="pendingArticlesData">
    Loading ...
  </section>
  <section v-else-if="errorOnFetchingData">
    Error occurred
  </section>
  <section v-else-if="articlesData">
    <article v-for="article in articlesData.data" :key="article.id">
      <h2><strong>{{ article.attributes.title }}</strong></h2>
      <p>{{ article.attributes.description }}</p>
      <NuxtLink :to="`/blog/${article.attributes.slug}`">more</NuxtLink>
    </article>
  </section>
</template>

<script setup lang="ts">
import type { Article } from '~/types';
const { find } = useStrapi();

const { data: articlesData, pending: pendingArticlesData, error: errorOnFetchingData } = await useAsyncData(
  'articles',
  () => find<Article>('articles')
);

watch(articlesData, (newArticlesData) => { });
</script>
