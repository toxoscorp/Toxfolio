<script setup>
import Home from '@/components/sections/Home.vue';
import About from '@/components/sections/About.vue';
import Life from '@/components/sections/Life.vue';
import Projects from '@/components/sections/Projects.vue';
</script>

<template>
  <div class="main">
    <Home />
    <About />
    <Life />
    <Projects />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
}
</style>
