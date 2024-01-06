<script setup>
import ProjectCard from '@/components/ProjectCard.vue';

const projects = [
{
        name: "Project 1",
        description: "This is a project",
        date: "2021-09-01",
        img: "https://picsum.photos/500/300",
        link: "https://github.com/toxoscorp"
    },{
        name: "Project 1",
        description: "This is a project",
        date: "2021-09-01",
        img: "https://picsum.photos/500/300",
        link: "https://github.com/toxoscorp"
    },{
        name: "Project 1",
        description: "This is a project",
        date: "2021-09-01",
        img: "https://picsum.photos/500/300",
        link: "https://github.com/toxoscorp"
    },{
        name: "Project 1",
        description: "This is a project",
        date: "2021-09-01",
        img: "https://picsum.photos/500/300",
        link: "https://github.com/toxoscorp"
    }
]
</script>

<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="projectsList">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </div>
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