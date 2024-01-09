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
  <div class="life" v-if="op">
    <h1>My Life</h1>
    <MyLife />
  </div>
  </Transition>
</template>

<style scoped>
.life {
    height: 100vh;
}
</style>