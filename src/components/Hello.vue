<template>
  <div>
    <h1 class="text-2xl font-bold">{{ message }}</h1>
  <p>{{description}}</p>
</div>
</template>
<script setup lang="ts">

const { msg: message, description } = defineProps({ msg: String, description: String })

</script>
<style></style>
