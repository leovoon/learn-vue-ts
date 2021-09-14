<template>
  <teleport to="#app">
    <div v-if="isOpen" class="modal" ref="modalRef">
      <h1><slot name="title">Info</slot></h1>
      <p><slot name="description">Message</slot></p>
      <button class="bg-red-400  cursor-pointer text-white py-2 px-4 shadow rounded" @click="emit('closeModal')"><h2>Close</h2></button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import useClickOutside from '../hooks/useClickOutside'

defineProps({ isOpen: Boolean })
const modalRef = ref<null| HTMLElement>(null)
const emit = defineEmits(['closeModal'])
const handleClickOutside = () => emit('closeModal' )
useClickOutside(modalRef, handleClickOutside)



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
  background: lightblue;
  z-index: 10;
}
</style>
