<template>
    <div v-if="pendingArticlesData">
        Loading ...
    </div>
    <div v-else-if="errorOnFetchingData">
        Error occurred
    </div>
    <div v-else-if="articlesData && articlesData.data[0]">
        <h1><strong>{{ articlesData.data[0].attributes.title }}</strong></h1>
        <div v-html="articlesData.data[0].attributes.content"></div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types';

const route = useRoute();
const { find } = useStrapi();

const { data: articlesData, pending: pendingArticlesData, error: errorOnFetchingData } = await useAsyncData(
    'articles',
    () => find<Article>('articles', { filters: { slug: { $eq: route.params.slug } } })
);

watch(articlesData, (newArticlesData) => { });
</script>