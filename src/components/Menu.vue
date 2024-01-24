<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
        <div class="menu-list">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#life">My Life</a></li>
                    <li><a href="#projects">Projects</a></li>
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
.menu-list ul li a {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    color: var(--color-text);
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 0.3s ease;

    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-list ul li a:hover {
    background-color: var(--color-background-mute);
    color: var(--color-header);
    border-bottom: 1px solid var(--color-header);
}
</style>