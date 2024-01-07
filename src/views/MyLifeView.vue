<script setup>
import MyLife from '@/components/MyLife.vue';
import { ref } from 'vue';

const op = ref(false);
const ps = ref(false);

setTimeout(() => {
  op.value = true;
}, 1);
setTimeout(() => {
  ps.value = true;
}, 200);

import PageSwitcher from '@/components/PageSwitcher.vue';
</script>

<template>
  <div class="myLife">
    <h1>My Life</h1>
    <MyLife />
  </div>
  <PageSwitcher v-if="ps" page="/projects" height="100"/>
</template>

<style scoped>
</style>