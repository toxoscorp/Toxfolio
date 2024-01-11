<script setup>
import Title from '@/components/Title.vue'
import SocialMediaBar from '@/components/SocialMediaBar.vue';

defineProps({
  inView: Boolean,
  heV: Number
})
</script>

<template>
  <div class="home" :style="{ '--hvh':heV+'px'}">
    <Transition name="home">
      <div v-if="inView" class="home-inside">
        <SocialMediaBar />
        <Title msg="Tristan Robichaud" subMsg="Software Engineer Student At The University of Ottawa" />
      </div>
    </Transition>
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
  /* background-color: red; */
}

.home-enter-active {
  transition: all 0.2s ease-out;
}

.home-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.home-enter-from {
  transform: translateX(-10vw);
  opacity: 0;
}
.home-leave-to {
  transform: translateX(50vw);
  opacity: 0;
}
</style>