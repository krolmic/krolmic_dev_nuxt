<template>
    <main class="container">
      <AppNavigation />
      <NuxtPage />
      <AppFooter />
    </main>
</template>

<script setup lang="ts">
import '@picocss/pico';

useHead({
  title: 'Michal Krol - Web and Mobile Apps Full Stack Development',
  meta: [
    { name: 'description', content: 'My space for content as freelancing full stack developer specialised on web and mobile apps' }
  ],
});
</script>

<style>
h1 {
  font-size: 4rem;
}
</style>