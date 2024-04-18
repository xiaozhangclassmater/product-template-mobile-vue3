<template>
  <div>
    Home
    <button @click="jumpPage">跳转</button>
  </div>
</template>

<script  setup>
import useStore from '@/store';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
console.log('store' , store.appStore);
const jumpPage = () =>{
  router.push('/Details')
}
</script>

<style scoped lang="less"></style>
