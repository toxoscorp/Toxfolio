<script setup>
import Title from '@/components/Title.vue'
import SocialMediaBar from '@/components/SocialMediaBar.vue';
</script>

<template>
  <div class="home">
    <SocialMediaBar />
    <Title msg="Tristan Robichaud" subMsg="Software Engineer Student At The University of Ottawa" />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 80vw;
  height: 100vh;
  background-color: red;
}
</style>