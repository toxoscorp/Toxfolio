<script setup>
import TechStackIcon from './TechStackIcon.vue';
</script>

<template>
    <div class="tech-stack">
        <h2>What I use :</h2>
        <div class="stack">
            <TechStackIcon icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" name="C++"/>
            <TechStackIcon name="C" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/>
            <TechStackIcon name="Rust" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"/>
            <TechStackIcon name="Java" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
            <TechStackIcon name="Python" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
            <TechStackIcon name="NodeJS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
            <TechStackIcon name="VueJS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"/>
            <TechStackIcon name="express" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"/>
            <TechStackIcon name="MongoDB" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"/>
        </div>
    </div>
</template>

<style scoped>
.tech-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.stack {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 25%;
}
</style>