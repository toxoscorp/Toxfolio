<script setup>
import MyLife from '@/components/MyLife.vue';

defineProps({
  inView: Boolean
})

const cards = [
{
    Title: 'University of Ottawa',
    SubTitle: 'Software Engineering COOP Student',
    Description: 'I am currently a student at the University of Ottawa in the Software Engineering program. I am currently in my second year of the program.',
    Date: '2023 - 2028',
    color: '#3ecd5e'
  },
  {
    Title: 'UOttawa SuperMilage',
    SubTitle: 'Engineering Team',
    Description: 'I am currently a member of the UOttawa SuperMilage Team. I\'m working on the software for the car a car that will be competing in the Shell Eco-Marathon Americas in 2023.',
    Date: '2023 - Present',
    color: 'red'
  },
  {
    Title: 'Waterloo Canadian Computing Competition',
    SubTitle: 'Programming Competition',
    Description: 'I participated in the Waterloo Canadian Computing Competition in 2021, 2022 and 2023. In 2020 I was just practicing and did not participate in the competition. I placed 2st in my school in 2021 and 2022. In 2023, I placed 1st in my school and I was on the Waterloo Honour Roll.',
    Date: '2020 - 2023',
    color: 'orange'
  },
  {
    Title: 'Odyssé de l’Objet',
    SubTitle: 'Competition in Industrial Design',
    Description: 'I participated in the Odyssé de l’Objet competition three times. My team and I won third place in 2019 and 2021. In 2023, we won best presentation.',
    Date: '2019, 2021, 2023',
    color: 'orange'
  },
  {
    Title: 'College Nouvelles-Frontières',
    SubTitle: 'High School Diploma',
    Description: 'I graduated from College Nouvelles-Frontières in 2023 with a high school diploma.',
    Date: '2018 - 2023',
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
  min-height: 190vh;
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