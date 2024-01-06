<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import VerticalTimeLine from '@/components/VerticalTimeLine.vue';

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
  // {
  //   Title: 'University of Ottawa',
  //   SubTitle: 'Software Engineering',
  //   Description: 'I am currently a student at the University of Ottawa in the Software Engineering program. I am currently in my second year of the program.',
  //   Date: '2023 - 2028',
  // },
  // {
  //   Title: 'College Nouvelles-Frontières',
  //   SubTitle: 'High School Diploma',
  //   Description: 'I graduated from College Nouvelles-Frontières in 2023 with a high school diploma.',
  //   Date: '2018 - 2023',
  // },
  // {
  //   Title: 'College Nouvelles-Frontières',
  //   SubTitle: 'High School Diploma',
  //   Description: 'I graduated from College Nouvelles-Frontières in 2023 with a high school diploma.',
  //   Date: '2018 - 2023',
  // },
  // {
  //   Title: 'University of Ottawa',
  //   SubTitle: 'Software Engineering',
  //   Description: 'I am currently a student at the University of Ottawa in the Software Engineering program. I am currently in my second year of the program.',
  //   Date: '2023 - 2028',
  // },
  // {
  //   Title: 'College Nouvelles-Frontières',
  //   SubTitle: 'High School Diploma',
  //   Description: 'I graduated from College Nouvelles-Frontières in 2023 with a high school diploma.',
  //   Date: '2018 - 2023',
  // }
]

</script>

<template>
  <main>
    <h1>My Life</h1>
    <!-- <TheWelcome /> -->
    <VerticalTimeLine :cards="cards" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  place-items: center;
  flex-direction: column;
}
</style>