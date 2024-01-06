<script setup>
defineProps({
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="item">
      <i>
      </i>
      <div class="details">
        <h5>{{ date }}</h5>
        <h3>
            {{ title }}
        </h3>
        <h4>
            {{ subTitle }}
        </h4>
        <p>
            {{ description }}
        </p>
      </div>
    </div>
</template>
  
<style scoped>
i {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-color: var(--color-background-soft);
    border-radius: 50%;
    position: relative;
    top: 0.5rem;
    right: 1rem;
}
.item {
    margin-top: 2rem;
    display: flex;
    position: relative;

    flex-direction: row;
}
.details {
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    width: 100%;
    /* margin-left: 1rem; */
    height: 10rem;
}
.details h5 {
    color: var(--color-heading);
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;

    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem;
    background-color: var(--color-background-mute);
}
.details h3 {
    color: var(--color-heading);
    font-size: 1.5rem;
    font-weight: 400;
}
.details h4 {
    color: var(--color-heading);
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
}
.details p {
    color: var(--color-text);
    font-size: 1rem;
    font-weight: 300;
    width: 30vw;
}
</style>
  