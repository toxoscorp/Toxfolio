<script setup>
import ProjectCard from '@/components/ProjectCard.vue';

const projects = [
{
        name: "UOttawa Supermileage Team",
        description: "I'm a software developer on the UOttawa Supermileage Team. We are a team of students from the University of Ottawa who are designing and building a fuel-efficient vehicle to compete in the Shell Eco-Marathon Americas competition.",
        date: "2023-09-01",
        img: "https://uottawa.sharepoint.com/sites/ES-202012-uOttawaSupermileageCompetitiveEngineeringTeam/Shared%20Documents/General/2022-2023/SEM2023%20Pictures%20and%20Videos/Good/SEM-8526.jpg?csf=1&web=1&e=aoW3Pt",
        link: "https://uosupermileage.ca",
        textColor: "#fff",
        color: "#3ecd5e"
    },{
        name: "SFTP-Uploader-Maven-Plugin",
        description: "Maven plugin to upload build artefact to a remote sftp server",
        date: "2021-09-01",
        img: "2023-01-06",
        link: "https://github.com/toxoscorp/SFTP-Uploader-Maven-Plugin",
        textColor: "#000000",
        color: "#3ecd5e"
    },{
        name: "CCC-Solutions",
        description: "Canadian Computing Competition (CCC) problem solutions",
        date: "2022-10-16",
        img: "",
        link: "https://github.com/toxoscorp/CCC-Solutions",
        textColor: "#000000",
        color: "#3ecd5e"
    },{
        name: "Toxfolio",
        description: "My portfolio website",
        date: "2021-09-01",
        img: "",
        link: "https://portfolio.toxoscorp.com",
        textColor: "#000000",
        color: "#3ecd5e"
    }
]
defineProps({
  inView: Boolean,
  heV: Number
})
</script>

<template>
  <div class="projects" :style="{ '--hvp':heV+'px'}">
    <Transition name="slide-fade">
      <div class="projects-inside" v-if="inView">
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
  min-height: max(100vh, var(--hvp));
  width: 80vw;
  /* background-color: green; */
  overflow: hidden;
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