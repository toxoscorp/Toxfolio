<script setup>
import { RouterLink } from 'vue-router'
import Menu from './Menu.vue'
import IconMenu from "./icons/IconMenu.vue"

import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu() {
    menuOpen.value = !menuOpen.value
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen.value) {
        toggleMenu()
    }
})
</script>

<template>
    <nav>
        <!-- <img alt="Menu" class="menu-btn" src="@/assets/menu.svg" width="25" height="25" @click="toggleMenu"/> -->
        <IconMenu class="menu-btn" @click="toggleMenu" />
        <RouterLink to="/">Toxfolio</RouterLink>
    </nav>
    <Transition name="slide-fade">
        <Menu v-if="menuOpen" @click="toggleMenu" />
    </Transition>
</template>

<style scoped>
a {
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: var(--color-heading);
    text-decoration: none;
}
nav {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 1rem;
    height: 3rem;
    width: 100%;
    font-size: 12px;
    text-align: center;
    z-index: 2;
}
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100vw);
  /* opacity: 0; */
}
</style>