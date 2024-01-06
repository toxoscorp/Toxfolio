<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <a class="IconButton" :href="link" target="_blank" rel="noopener noreferrer">
        <div class="button-icon">
            <img :src="icon" alt="icon" height="20"/>
        </div>
        <div class="button-text">
            <p>{{ text }}</p>
        </div>
    </a>
</template>

<style scoped>
.IconButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-text);
    background-color: var(--color-background-soft);
    margin: 0 10px;
    padding: 10px;
    border-radius: 5px;
    transition: 0.2s;
}

.IconButton div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.IconButton div img {
    margin: 0 5px;
}
</style>