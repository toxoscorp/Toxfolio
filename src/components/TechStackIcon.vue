<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="Icon">
    <img :src="icon" :alt="name">
  </div>
</template>

<style scoped>
.Icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.Icon {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 50px;
  overflow: hidden;
  background-color: var(--color-background-soft);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>