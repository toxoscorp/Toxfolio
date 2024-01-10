<script setup>
import MyLife from '@/components/MyLife.vue';

defineProps({
  inView: Boolean
})

const cards = [
{
    Title: 'University of Ottawa',
    SubTitle: 'Software Engineering',
    Description: 'I am currently a student at the University of Ottawa in the Software Engineering program. I am currently in my second year of the program.',
    Date: '2023 - 2028',
    color: '#3ecd5e'
  },
  {
    Title: 'College Nouvelles-Frontières',
    SubTitle: 'High School Diploma',
    Description: 'I graduated from College Nouvelles-Frontières in 2023 with a high school diploma.',
    Date: '2018 - 2023',
    color: '#3ecd5e'
  },
  {
    Title: 'University of Ottawa',
    SubTitle: 'Software Engineering',
    Description: 'I am currently a student at the University of Ottawa in the Software Engineering program. I am currently in my second year of the program.',
    Date: '2023 - 2028',
    color: '#3ecd5e'
  }
]
</script>

<template>
    <div class="life">
        <Transition name="slide-fade">
        <div class="life-inside" v-if="inView">
            <h1>My Life</h1>
            <MyLife :cards="cards" />
        </div>
        </Transition>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.life {
  min-height: 100vh;
}
.life-inside {
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  min-height: 100vh;
}

h1 {
  font-size: 3rem;
  color: var(--color-heading);
  text-align: center;
}
</style>