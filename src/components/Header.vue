<template>
  <nav class="mb-10 flex justify-between items-center block">
    <div class="logo">
      <a class="brand-logo bg-gradient-26 p-1 text-white">cooLogo</a>
    </div>
    
    <div v-if="!user?.isLogin" class="inline-block space-x-4 text-sm">
      <button class="bg-dark-50/10 rounded px-2 py-1">Login</button>
      <button class="bg-dark-50/10 rounded px-2 py-1">Sign Up</button>
    </div>
    <div v-else class="inline-block space-x-4 text-sm relative">
      <pre>drop down</pre> <Dropdown :title="`${user.userName}`" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'

export interface UserProps {
  isLogin: boolean
  userName?: string
  id?: number
}

export default defineComponent({
  components: {
    Dropdown,
  },
  props: {
    user: Object as PropType<UserProps>,
  },
})
</script>
