<script setup>
defineProps({
  project: Object,
})

function openLink(link) {
    window.open(link, '_blank');
}

</script>

<template>
    <div class="card" @click="openLink(project.link)" :style="{ '--card-hover-text-color':project.textColor}">
        <div class="card-bg" :style="{ backgroundImage: 'url('+project.img+')'}"></div>

        <div class="card-title">{{ project.name }}</div>

        <div class="card-date-box">Start : <span class="card-date">{{ project.date }}</span></div>
    </div>
</template>

<style scoped>

.card {
    overflow: hidden;
    border-radius: 20px;

    display: block;
    padding: 30px 20px;
    background-color: var(--color-background-mute);
    position: relative;
    z-index: 0;

    aspect-ratio: 16/10;
    width: 25vw;

    cursor: pointer;
}

.card:hover .card-date, .card:hover .card-title, .card:hover .card-date-box {
    text-decoration: none;
    /* color: var(--color-text); */
    color: var(--card-hover-text-color);
}

.card:hover .card-bg {
    /* -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10); */
    top: 0;
    right: 0;
    border-radius: 20px;
    height: 100%;
}

.card-title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: var(--color-text);

  z-index: 2;
  position: relative;

  transition: color .5s ease;
}

.card-date-box {
  font-size: 18px;
  color: var(--color-text);

  z-index: 2;
  position: relative;

  transition: color .5s ease;
}

.card-date {
  font-weight: bold;
  color: var(--color-heading);
  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}

.card-bg {
    height: 120px;
    aspect-ratio: 16/10;
    background-color: #f9b234;
    background-size: cover;

    z-index: 1;
    position: absolute;
    top: -50px;
    right: -80px;

    border-radius: 50px;

    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
}

/* img {
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

    box-shadow: 10px 10px 0px var(--color-background-soft);
} */
</style>