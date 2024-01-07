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
  <Transition name="slide-fade">
  <div class="myLife" v-if="op">
    <h1>My Life</h1>
    <MyLife />
  </div>
  </Transition>
  <PageSwitcher v-if="ps" page="/projects" height="100"/>
</template>

<style scoped>
</style>