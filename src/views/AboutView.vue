<script setup>
import { RouterLink } from 'vue-router';
import TechStack from '@/components/TechStack.vue';
</script>

<template>
  <div class="about">
    <div class="content">
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
      <TechStack />
    </div>
  </div>
</template>

<style>
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
}

.content {
  display: grid;
  grid-template-columns: 3fr 2fr;
}
</style>
