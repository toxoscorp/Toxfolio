<script setup>
defineProps({
  project: Object,
})

function openLink(link) {
    window.open(link, '_blank');
}

</script>

<template>
    <div class="card" @click="openLink(project.link)">
        <img :src="project.img" alt="img">
        <div class="cardDate">
            <p>{{ project.date }}</p>
        </div>
        <div class="cardTitle">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
        </div>
    </div>
</template>

<style scoped>
img {
    position: absolute;
    width: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    aspect-ratio: 10/4.5;
    padding: 2%;
    border-radius: 20px;

    z-index: -2;
}

.cardDate {
    display: flex;
    justify-content: flex-end;
}
.cardDate p {
    margin: 0;
    padding: 2%;
    border-radius: 10px;
    background-color: var(--color-background-soft);
}
.cardTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.card {
    position: relative;
    background-color: var(--color-background-mute);
    border-radius: 10px;
    aspect-ratio: 5/3;
    padding: 1rem;
    margin: 1rem;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 0;

    /* drop shadow */
    box-shadow: 10px 10px 0px var(--color-background-soft);
}
</style>