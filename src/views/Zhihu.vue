<template>
  <div>
    <pre>nav</pre>
    <Header :user="testUser" />

    <pre>columns column</pre>
    <ColumnList :list="testData" />

    <pre class="mt-4rem">useStorage</pre>
    <input class="border-light-blue-300 border rounded p-1.5" v-model="state.content" type="text" />
    {{ text }}

    <pre class="mt-4rem">pass attr from parent to child, inheritAttr = false, v-bind $attrs | validate @blur</pre>
    <ValidateInput type="text" placeholder="Type something here.."/>

  </div>
</template>
<script setup lang="ts">
import Header, { UserProps } from '../components/Header.vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'
import ValidateInput from '../components/ValidateInput.vue'

import { useStorage } from '@vueuse/core'
import ValidateInput1 from '../components/ValidateInput.vue';

const obj: { content: string, bar?: string } = { content: 'banana' };

const state = useStorage('vue-use-locale-storage', obj)

state.value = { ...state.value, bar: 'Apple' }



const text = JSON.stringify(state.value)


const testUser: UserProps = {
  isLogin: true,
  userName: 'leovoon',
  id: 123,
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '标题1',
    description: '描述1',
    avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
  },
  {
    id: 2,
    title: '标题2',
    description: '描述2',
    avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
  },
  {
    id: 3,
    title: '标题3',
    description: '描述3',
    avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
  },
]
</script>

