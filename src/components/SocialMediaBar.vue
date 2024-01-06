<script setup>
import IconButton from './IconButton.vue'
</script>

<template>
    <div class="social-media-bar">
        <IconButton icon="https://img.icons8.com/ios-filled/50/000000/github.png" link="https://github.com/toxoscorp" text="GitHub" />
        <IconButton icon="https://img.icons8.com/ios-filled/50/000000/linkedin.png" link="https://www.linkedin.com/in/tristan-robichaud-2448b1293/" text="LinkedIn" />
    </div>
</template>

<style scoped>
.social-media-bar {
    display: flex;
    flex-direction: row;
}
</style>