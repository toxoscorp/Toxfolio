<script setup>
defineProps({
  card: Object,
})
</script>

<template>
    <div class="card">
        <div class="cardTitle">
            <h2>{{ card.Title }}</h2>
            <h3>{{ card.SubTitle }}</h3>
        </div>
        <div class="cardDescription">
            <p>{{ card.Description }}</p>
        </div>
        <div class="cardDate">
            <p>{{ card.Date }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: var(--color-background-soft);
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>