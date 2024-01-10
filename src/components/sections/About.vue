
import { h } from 'vue';
<script setup>
import { RouterLink } from 'vue-router';
import TechStack from '@/components/TechStack.vue';
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
  <div class="about">
    <Transition name="slide-fade">
      <div class="content" v-if="inView">
        <TechStack />
        <div class="myLife">
            <h1>About Me</h1>
          <p>
            Hi, I'm a software engineer with a passion for learning and teaching. I
            enjoy working with C++, Rust, and JavaScript.
            I'm currently working on multiple projects in my free time.
            You can find them on my <a href="github.com/toxoscorp">github</a> or on the <RouterLink to="/projects">project page</RouterLink> of this website.
          </p>
          <p>
            I'm also a student at the University of Ottawa, where I'm
            pursuing a Bachelor's degree in software engineering. I'm currently in my first year.
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-10vw);
  opacity: 0;
}

h1 {
  font-size: 3rem;
  margin: 0;
  padding: 0;
  color: var(--color-heading);
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  /* background-color: blue; */
}

.content {
  display: grid;
  grid-template-columns: 2fr 3fr;
}
</style>
