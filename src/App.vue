<template>
    
  <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>

</template>

<script setup lang="ts">

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2em;
  color: #2c3e50;
  margin: 40px 0;
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
  border: solid 1px lightgray;
  border-radius: 5px;
  width: 80vw;
  padding: 0.5rem;
  background: rgb(246, 246, 246);
  overflow: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
