<script setup>
import MyLifeCard from './MyLifeCard.vue';

const cards = [
{
    Title: 'University of Ottawa',
    SubTitle: 'Software Engineering',
    Description: 'I am currently a student at the University of Ottawa in the Software Engineering program. I am currently in my second year of the program.',
    Date: '2023 - 2028',
  },
  {
    Title: 'College Nouvelles-Frontières',
    SubTitle: 'High School Diploma',
    Description: 'I graduated from College Nouvelles-Frontières in 2023 with a high school diploma.',
    Date: '2018 - 2023',
  },
  {
    Title: 'University of Ottawa',
    SubTitle: 'Software Engineering',
    Description: 'I am currently a student at the University of Ottawa in the Software Engineering program. I am currently in my second year of the program.',
    Date: '2023 - 2028',
  }
]
</script>

<template>
    <div class="lifePath">
        <div class="left">
            <div class="itemcards" v-for="(card, index) in cards" :key="index">
                <MyLifeCard v-if="index % 2 == 0" :card="card" />
                <div class="empty" v-if="index % 2 != 0"></div>
            </div>
        </div>
        <div class="middle">
            <div class="dot" v-for="card in cards"></div>
        </div>
        <div class="right">
            <div class="itemcards" v-for="(card, index) in cards" :key="index">
                <MyLifeCard v-if="index % 2 != 0" :card="card" />
                <div class="empty" v-if="index % 2 == 0"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.lifePath {
    display: grid;
    grid-template-columns: 5fr 1fr 5fr;
}
/* make a vertical line with dote evenly distributed on it in the middle div */
.middle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    content: '';
    width: 1px;
    background-color: var(--color-text);
}
.dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-text);
}
.empty {
    height: 250px;
}
</style>