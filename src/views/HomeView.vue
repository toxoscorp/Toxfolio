<script setup>
import Home from '@/components/sections/Home.vue';
import About from '@/components/sections/About.vue';
import Life from '@/components/sections/Life.vue';
import Projects from '@/components/sections/Projects.vue';

import { h, ref } from 'vue';
import { useElementSize } from '@vueuse/core';

const hc = ref(null);
const ac = ref(null);
const lc = ref(null);
const pc = ref(null);

var homeH = ref(0);
var aboutH = ref(0);
var lifeH = ref(0);
var projectsH = ref(0);

const hh = useElementSize(hc).height;
const ah = useElementSize(ac).height;
const lh = useElementSize(lc).height;
const ph = useElementSize(pc).height;

const home = ref(true);
const about = ref(true);
const life = ref(true);
const projects = ref(true);

import { onMounted, onUnmounted } from 'vue';

const scrollHandler = () => {
  var scroll = window.scrollY;
  console.log(scroll);
  console.log(homeH.value);
  console.log(aboutH.value);
  console.log(lifeH.value);
  console.log(projectsH.value);

  if (scroll <= homeH.value * 0.5){
    home.value = true;
  } else {
    home.value = false;
  }

  if (scroll >= homeH.value * 0.25 && scroll <= homeH.value + aboutH.value * 0.25){
    about.value = true;
  } else {
    about.value = false;
  }

  if (scroll >= homeH.value + aboutH.value * 0.1 && scroll <= homeH.value + aboutH.value + lifeH.value * 0.75){
    life.value = true;
  } else {
    life.value = false;
  }

  if (scroll >= homeH.value + aboutH.value + lifeH.value * 0.5 && scroll <= homeH.value + aboutH.value + lifeH.value + projectsH.value * 0.5){
    projects.value = true;
  } else {
    projects.value = false;
  }
}

const resizeHandler = () => {
  window.location.reload();
}

onMounted(() => {
  homeH.value = hh.value;
  aboutH.value = ah.value;
  lifeH.value = lh.value;
  projectsH.value = ph.value;

  about.value = false;
  life.value = false;
  projects.value = false;

  console.log(homeH.value);
  console.log(aboutH.value);
  console.log(lifeH.value);
  console.log(projectsH.value);

  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
  window.removeEventListener('resize', resizeHandler);
});

</script>

<template>
  <div class="main">
    <Home :in-view="home" ref="hc" :he-v="homeH" id="home"/>
    <About :in-view="about" ref="ac" :he-v="aboutH" id="about"/>
    <Life :in-view="life" :he-v="lifeH" ref="lc" id="life"/>
    <Projects :in-view="projects" ref="pc" :he-v="projectsH" id="projects"/>
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
