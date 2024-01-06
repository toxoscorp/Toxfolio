<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu() {
    menuOpen.value = !menuOpen.value
}

import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="menu">
        <button @click="toggleMenu">Menu</button>
        <Transition name="slide-fade">
            <div v-if="menuOpen" class="menu-list" @click="toggleMenu">
                <ul>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/about">About</RouterLink></li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100vw);
  opacity: 0;
}
.menu-list {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #fff;

    padding: 5vh;

    z-index: 1;
}
.menu-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90vh;
}
.menu-list ul li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #eee;
}
</style>