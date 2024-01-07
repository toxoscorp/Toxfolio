<script setup>
import { toRefs } from "@vue/reactivity";
const props = defineProps({
    page: {
        type: String,
        default: '/'
    },
    height: {
        type: Number,
        default: 100
    }
})

let { page } = toRefs(props);

import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// check if the user has scrolled to the bottom of the page
const checkBottom = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  return scrollHeight - scrollTop === clientHeight;
}
// event handler for scrolling
const handleScroll = () => {
  if (checkBottom()) {
    // if the user has scrolled to the bottom of the page, switch to the next page
    switchPage();
  }
}
// switch to the next page
const switchPage = () => {
    router.push(page.value);
}
// add the event handler to the window
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// remove the event handler from the window
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
<div class="switcher">
</div>
</template>

<style>
.switcher {
  position: absolute;
  top: 0;
  left: 0;
  height: 200vh;
  width: 100%;
}
</style>