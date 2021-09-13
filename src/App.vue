<script setup lang="ts">
import Hello from './components/Hello.vue'
import useMousePosition from './hooks/useMousePosition'
import useFetch from './hooks/useFetch'
import Modal from './components/Modal.vue'
import { ref } from 'vue'

interface dog {
  message: string
  status: string
}

const { result, loading, loaded, error, refetch } = useFetch<dog>(
  'https://dog.ceo/api/breed/shiba/images/random',
)

const { x: positionX, y: positionY } = useMousePosition()

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const handleClose = () => {
  isOpen.value = false
}
</script>

<template>
  <Hello
    msg="vue3 script setup"
    description="sfc, defineEmits, defineProps, custom hooks"
  />
  <h1>X: {{ positionX }}, Y: {{ positionY }}</h1>
  <div class="dogContainer" @click="refetch">
    <img v-if="result" :src="result.message" />
    <img
      v-if="loading"
      class="loading"
      src="https://c.tenor.com/pgO8hZgOW5AAAAAd/loading-bar.gif"
      alt="loading"
    />
    <img
      v-if="error"
      src="https://c.tenor.com/3pX4U3Jk24MAAAAj/popato-cute.gif"
    />
  </div>

  <pre class="status">
    <span>loaded: {{ loaded }}</span>
    <span>loading: {{ loading }}</span>
    <span>result: {{ result ? result : 'null' }}</span>
    <span>error: {{ error ? error : 'null' }}</span>
  </pre>

  <h1>
    <button @click="openModal"><h2>Open Modal</h2></button>
    <Modal :isOpen="isOpen" @closeModal="handleClose">
      <template #title> Info </template>
      <template #description>
        Data from
        <a href="https://dog.ceo/dog-api/">Dog API.</a> <br />Made with 💙 by
        leovoon
      </template>
    </Modal>
  </h1>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dogContainer {
  overflow: auto;
  position: relative;
  width: 80vw;
  height: 300px;
  border: 2px solid black;
  cursor: pointer;
  outline: none;
}

.dogContainer > * {
  position: absolute;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  width: inherit;
  height: inherit;
}

.status {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-radius: 5px;
  width: 80vw;
  padding: 0.5rem;
  background: rgb(246, 246, 246);
  overflow: auto;
}
</style>
