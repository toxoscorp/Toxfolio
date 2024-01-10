<script setup>
defineProps({
    cards: Object
})
</script>

<template>
    <ul class="lifePath">
        <li class="itemcards" v-for="(card, index) in cards" :key="index" :style="{ '--accent-color': card.color }">
            <div class="date">{{ card.Date }}</div>
            <div class="title">{{ card.Title }} - {{ card.SubTitle }}</div>
            <div class="descr">{{ card.Description }}</div>
        </li>
    </ul>
</template>

<style scoped>
.lifePath {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --path-width: 0.25rem;
  display: grid;
  grid-template-columns: var(--path-width) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
.lifePath::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--path-width) / 2);
}

/* row gaps */
.lifePath .itemcards:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
.lifePath .itemcards {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
.lifePath .itemcards .date {
  --date-height: 3rem;
  height: var(--date-height);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--date-height) / 2) 0 0 calc(var(--date-height) / 2);
}

/* circle */
.lifePath .itemcards .date::after {
  content: "";
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  background: var(--color-background);
  border: 0.3rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--path-width) / 2);
}

/* title descr */
.lifePath .itemcards .title,
.lifePath .itemcards .descr {
  background: var(--color-background);
  position: relative;
  padding-inline: 1.5rem;
}
.lifePath .itemcards .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}
.lifePath .itemcards .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
.lifePath .itemcards .title::before,
.lifePath .itemcards .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
.lifePath .itemcards .title::before {
  bottom: calc(100% + 0.125rem);
}

.lifePath .itemcards .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  .lifePath {
    grid-template-columns: 1fr var(--path-width) 1fr;
  }
  .lifePath::before {
    grid-column: 2;
  }
  .lifePath .itemcards:nth-child(odd) {
    grid-column: 1;
  }
  .lifePath .itemcards:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  .lifePath .itemcards:nth-child(2) {
    grid-row: 2/4;
  }

  .lifePath .itemcards:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  .lifePath .itemcards:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--path-width) / 2);
  }
  .lifePath .itemcards:nth-child(odd) .date {
    border-radius: 0 calc(var(--date-height) / 2) calc(var(--date-height) / 2) 0;
  }
}
</style>