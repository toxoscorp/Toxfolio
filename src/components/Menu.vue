<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
        <div class="menu-list">
                <ul>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/about">About</RouterLink></li>
                </ul>
        </div>
</template>

<style scoped>
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