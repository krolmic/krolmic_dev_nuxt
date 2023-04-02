<template>
    <div>
      <AppNavigation />
      <slot />
      <AppFooter />
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Michal Krol - Web and Mobile Apps Full Stack Development',
  meta: [
    { name: 'description', content: 'My space for content as freelancing full stack developer specialised on web and mobile apps' }
  ],
});
</script>