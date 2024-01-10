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
defineProps({
  inView: Boolean
})
</script>

<template>
    <div class="life">
        <Transition name="slide-fade">
        <div class="life-inside" v-if="inView">
            <h1>My Life</h1>
            <MyLife />
        </div>
        </Transition>
  </div>
</template>

<style scoped>
.life {
    height: 100vh;
    width: 80vw;
    /* background-color: yellow; */
}
</style>