<template>
  <div class="Home-wapper">
    Home
    <button @click="jumpPage">
      跳转
    </button>
  </div>
</template>

<script  setup>
import useStore from '@/store';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
console.log('store' , store.appStore);
const jumpPage = () =>{
    router.push('/Home/productList')
}
</script>

<style scoped lang="less">
.Home-wapper{
  height: 100vh;
  background-color: #ccc;
}
</style>
