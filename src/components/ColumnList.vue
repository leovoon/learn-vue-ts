<template>
  <div class="flex flex-col space-y-4">
    <div
      class="rounded border-[0.2px] shadow shadow-sm text-sm shadow-dark-50"
      v-for="item in list"
      :key="item.id"
    >
      <ColumnListItem
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :avatar="item.avatar"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ColumnListItem from './ColumnListItem.vue'

export interface ColumnProps {
  id: number
  title: string
  description: string
  avatar: string
}

export default defineComponent({
  components: {
    ColumnListItem,
  },
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
