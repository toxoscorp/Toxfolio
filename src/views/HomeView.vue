<script setup>
import Home from '@/components/sections/Home.vue';
import About from '@/components/sections/About.vue';
import Life from '@/components/sections/Life.vue';
import Projects from '@/components/sections/Projects.vue';
import Blank from '@/components/sections/Blank.vue';

import { ref } from 'vue';
const home = ref(true);
const about = ref(false);
const life = ref(false);
const projects = ref(false);

import { onMounted, onUnmounted } from 'vue';

const scrollHandler = () => {
  const scroll = window.scrollY;
  if (scroll < 0.5 * window.innerHeight) {
    home.value = true;
    about.value = false;
    life.value = false;
    projects.value = false;
  } else if (scroll < 1.5 * window.innerHeight) {
    home.value = false;
    about.value = true;
    life.value = false;
    projects.value = false;
  } else if (scroll < 2.5 * window.innerHeight) {
    home.value = false;
    about.value = false;
    life.value = true;
    projects.value = false;
  } else {
    home.value = false;
    about.value = false;
    life.value = false;
    projects.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});

</script>

<template>
  <div class="main">
    <Home :in-view="home" />
    <About :in-view="about" />
    <Life :in-view="life" />
    <Projects :in-view="projects"/>
  </div>
  <!-- <div class="pageScroll"></div> -->
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: var(--color-background); */
}

.pageScroll {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400vh;
  /* background-color: var(--color-background); */
  z-index: -1;
}
</style>
