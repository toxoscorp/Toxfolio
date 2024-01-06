<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  subMsg: {
    type: String,
  }
})
</script>

<template>
  <div class="Title">
    <h1 class="green">{{ msg }}</h1>
    <h3>{{ subMsg }}</h3>
  </div>
</template>

<style scoped>

h1 {
  font-weight: 400;
  font-size: 4.5rem;
  position: relative;
  color: var(--color-heading);
}

h3 {
  font-weight: 300;
  font-size: 2rem;
  position: relative;
  top: -20px;
  width: 60%;
}

.Title h1,
.Title h3 {
  text-align: left;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
