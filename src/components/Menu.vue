<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
        <div class="menu-list">
                <ul>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/about">About</RouterLink></li>
                    <li><RouterLink to="/myLife">My Life</RouterLink></li>
                    <li><RouterLink to="/projects">Projects</RouterLink></li>
                </ul>
        </div>
</template>

<style scoped>
.menu-list {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-background);

    padding: 10vh;

    z-index: 1;
}
.menu-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80vh;
}
.menu-list ul li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #eee;
}
</style>