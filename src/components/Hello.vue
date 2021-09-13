<template>
  <div>
    <h1>{{ message }}</h1>
  <p>{{description}}</p>
</div>
</template>
<script setup lang="ts">

const { msg: message, description } = defineProps({ msg: String, description: String })

</script>
<style></style>
