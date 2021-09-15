<template>
    <div class="flex space-x-4 p-3 items-center justify-start">
        <img class="rounded-full h-10 w-10" :src="avatar" :alt="title" />
        <h2 class="text-md">{{ title }}</h2>
    </div>
    <p class="p-3 text-gray-500">{{ description }}</p>
    <a
        class="border-t rounded-b cursor-pointer bg-dark-50/10 text-center text-xs p-3 transition-colors block hover:bg-dark-50/20"
        href="#"
    >Read More</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: false,
        },
    },

    setup() { },
})
</script>
