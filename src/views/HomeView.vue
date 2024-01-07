<script setup>
import Title from '@/components/Title.vue'
import SocialMediaBar from '@/components/SocialMediaBar.vue';
import { NavArrowDown } from '@iconoir/vue';

import PageSwitcher from '@/components/PageSwitcher.vue';
</script>

<template>
  <main>
    <SocialMediaBar />
    <Title msg="Tristan Robichaud" subMsg="Software Engineer Student At The University of Ottawa" />
  </main>
  <PageSwitcher page="/about" height="100"/>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 80vw;
}
</style>
