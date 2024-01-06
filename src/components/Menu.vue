<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu() {
    menuOpen.value = !menuOpen.value
}

import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <button @click="toggleMenu">Menu</button>
        <div v-if="menuOpen">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </div>
    </div>
</template>