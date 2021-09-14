<template>
  <div class="px-[1em]">
    <Hello
      msg="vue3 script setup"
      description="sfc, defineEmits, defineProps, custom hooks"
    />

    <div class="my-4">
      <pre>useMousePosition</pre>
      <h1 class="font-bold text-lg">X: {{ positionX }}, Y: {{ positionY }}</h1>
    </div>


      <pre>useFetch</pre>
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

    <div class="my-4">
      <pre>useClickOutside</pre>
      <button
        class="p-2 bg-indigo-500 text-white rounded-md drop-shadow-lg my-2"
        @click.stop="openModal"
      >
        <h2>Open Modal</h2>
      </button>
      <Modal :isOpen="isOpen" @closeModal="handleClose">
        <template #title> Info </template>
        <template #description>
          Data from
          <a href="https://dog.ceo/dog-api/">Dog API.</a> <br />Made with 💙 by
          leovoon
        </template>
      </Modal>
    </div>
    <router-link class="block mt-4 text-red-500 underline" to="/zhihu"
      >Go to next practice --></router-link
    >
  </div>
</template>

<script setup lang="ts">
import useMousePosition from '../hooks/useMousePosition'
import useFetch from '../hooks/useFetch'
import Hello from '../components/Hello.vue'
import Modal from '../components/Modal.vue'
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
const handleClose = () => (isOpen.value = false)
</script>
