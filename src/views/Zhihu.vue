<template>
  <div>
        <pre>nav</pre>
    <Header :user="testUser" />
        <pre>columns column</pre>
    <ColumnList :list="testData" />
  </div>
</template>
<script setup lang="ts">
import Header, { UserProps } from '../components/Header.vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'

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
