<template>
  <div class="container flex flex-col md:flex-row gap-10">
    <div class="  rounded border-[0.2px] md:min-w-[25vw] shadow shadow-sm text-sm min-w-[80vw] shadow-dark-50" v-for="column in list" :key="column.id">
      <div class="flex  space-x-4 p-3 items-center justify-start">
      <img class="rounded-full h-10 w-10 " :src="column.avatar" :alt="column.title" />
      <h2 class="text-md">{{ column.title }}</h2>
      </div>
      <p class="p-3 text-gray-500">{{ column.description }}</p>
      <a class="border-t rounded-b cursor-pointer bg-dark-50/10 text-center text-xs p-3 transition-colors block hover:bg-dark-50/20 " href="#">Read More</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  description: string
  avatar: string
}

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },

  setup() {

  },
})
</script>
