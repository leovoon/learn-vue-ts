<template>
  <li class="list-none dropdown-option" :class="[disabled && ' pointer-events-none text-dark-50/20']">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style></style>
