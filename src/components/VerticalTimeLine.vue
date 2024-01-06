<script setup>
defineProps({
    cards: {
        type: Array,
        required: true
    }
})

import VerticalTimeLineItemLeft from '@/components/VerticalTimeLineItemLeft.vue'
import VerticalTimeLineItemRight from '@/components/VerticalTimeLineItemRight.vue'
</script>

<template>
    <div class="VerticalTimeLine">
        <div class="timeline">
            <div class="timeline__wrap">
                <div class="timeline__items">
                    <div class="timeline__item" v-for="(card, index) in cards" :key="index">
                        <!-- <VerticalTimeLineItemLeft v-if="index % 2 == 0" :date="card.Date" :title="card.Title" :subTitle="card.SubTitle" :description="card.Description"/> -->
                        <VerticalTimeLineItemLeft :date="card.Date" :title="card.Title" :subTitle="card.SubTitle" :description="card.Description"/>
                        <!-- <VerticalTimeLineItemRight v-if="index % 2 != 0" :date="card.Date" :title="card.Title" :subTitle="card.SubTitle" :description="card.Description"/> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.timeline__items {
    position: relative;
    display: flex;
    flex-direction: column;
    place-items: left;
}

.timeline__item {
    position: relative;
    margin-bottom: 5rem;
}
.itemRight {
    position: relative;
}

.itemLeft {
    position: relative;
}

</style>