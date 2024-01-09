<script setup>
import ProjectCard from '@/components/ProjectCard.vue';

const projects = [
{
        name: "Project 1",
        description: "This is a project",
        date: "2021-09-01",
        img: "https://cdn.discordapp.com/attachments/941862754178986054/1031353708614795304/DALLE_2022-10-16_19.21.00_-_all_white_cat_with_green_eyes_measuring_the_voltage_on_a_pcb_board.png?ex=65adadfd&is=659b38fd&hm=16947fce64eb6281c71fabcdb915b72811e303cc50160268d420e83d5233f1de&",
        link: "https://github.com/toxoscorp",
        textColor: "#000000",
        color: "#3ecd5e"
    },{
        name: "Project 1",
        description: "This is a project",
        date: "2021-09-01",
        img: "",
        link: "https://github.com/toxoscorp",
        textColor: "#000000",
        color: "#3ecd5e"
    },{
        name: "Project 1",
        description: "This is a project",
        date: "2021-09-01",
        img: "https://picsum.photos/640/400",
        link: "https://github.com/toxoscorp",
        textColor: "#000000",
        color: "#3ecd5e"
    },{
        name: "Project 1",
        description: "This is a project",
        date: "2021-09-01",
        img: "https://picsum.photos/500/300",
        link: "https://github.com/toxoscorp",
        textColor: "#000000",
        color: "#3ecd5e"
    }
]
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
    <div class="projects" v-if="op">
      <h1>Projects</h1>
      <div class="projectsList">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    color: var(--color-heading);
}
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.projectsList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
}

@media (max-width: 1024px) {
  .projectsList {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
}
</style>