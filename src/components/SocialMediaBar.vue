<script setup>
import IconButton from './IconButton.vue'
import IconButtonSlot from './IconButtonSlot.vue'
import { Github, Mail, Linkedin, Discord } from '@iconoir/vue';
</script>

<template>
    <div class="social-media-bar">
        <IconButtonSlot link="https://github.com/toxoscorp" text="GitHub"><Github/></IconButtonSlot>
        <IconButtonSlot link="https://www.linkedin.com/in/tristan-robichaud-2448b1293/" text="LinkedIn" ><Linkedin/></IconButtonSlot>
        <IconButtonSlot link="https://discord.com/users/517814115528474644" text="Discord" ><Discord/></IconButtonSlot>
        <IconButtonSlot link="mailto:tristan.robichaud@outlook.com?body=%0A%0A%0AContact%20By%20Portfolio" text="Mail" ><Mail/></IconButtonSlot>
    </div>
</template>

<style scoped>
.social-media-bar {
    display: flex;
    flex-direction: row;
}
</style>