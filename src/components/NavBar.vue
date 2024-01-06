<script setup>
import { RouterLink } from 'vue-router'
import Menu from './Menu.vue'
</script>

<template>
    <nav>
        <Menu />
        <RouterLink to="/">Toxfolio</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 3rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    font-size: 12px;
    text-align: center;
}
</style>