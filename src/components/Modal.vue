<template>
  <teleport to="#app">
    <div v-if="isOpen" class="modal">
      <h1><slot name="title">Info</slot></h1>
      <p><slot name="description">Message</slot></p>
      <button @click="emit('closeModal')"><h2>Close</h2></button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
defineProps({ isOpen: Boolean })

const emit = defineEmits(['closeModal'])
</script>

<style>
.modal {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 15px;
  position: absolute;
  padding: 1rem;
  display: grid;
  place-items: center;
  background: lightblue
}
</style>
