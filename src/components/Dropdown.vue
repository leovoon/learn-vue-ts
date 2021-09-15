<template>
  <div
    class="rounded flex items-center space-x-1 py-1 px-2"
    @click="toggleDropdown"
    ref="dropdownRef"
  >

    <span>Hi</span>
    <span class="bg-clip-text bg-gradient-3 text-transparent">{{ title }}</span>
    <svg
      class="w-3 h-3 transition-transform ease-in-out duration-300"
      :class="[!isOpen ? 'transform rotate-0' : 'transform rotate-180']"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>

    <div v-if="isOpen" class="bg-white rounded-lg flex-col flex shadow-lg z-10 absolute top-12">
      <DropdownItem disabled>
        <button class="px-4 py-2">Disabled</button>
      </DropdownItem>
      <DropdownItem>
        <button class="px-4 py-2">Logout</button>
      </DropdownItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DropdownItem from './DropdownItem.vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  components: {
    DropdownItem,
  },
  props: {
    title: {
      title: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)

    useClickOutside(dropdownRef, () => (isOpen.value = false))

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }
    return { isOpen, toggleDropdown, dropdownRef }
  },
})
</script>
